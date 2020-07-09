import Serie from './serie.model'
import axios from 'axios'
import mongoose from 'mongoose'

const controller = {
    async getAll(req, res){
        const serie = await Serie.find()
        res.status(200).send(serie)
    },
    async create(req, res){
        const { base, serie, chapter } = req.body
        const downloadLink = await controller.getDownloadLink(base, chapter)
        const record = new Serie({
            downloadLink,
            serie,
            base,
            chapter,
            next: chapter+1
        })
        await record.save()
        res.send(record)
    },
    async next(req, res){
        const last = await Serie.find({serie:req.params.serie}).sort({createdAt:-1})
        if(!last){
            return res.status(400).send('No puedes pedir siguiente de una serie que no existe')
        }
        const { base, serie } = last[0]
        const chapter = last[0].next
        const downloadLink = await controller.getDownloadLink(base, chapter)
        const record = new Serie({
            downloadLink,
            serie,
            base,
            chapter,
            next: chapter+1
        })
        await record.save()
        res.send(record)
    },
    async update(req, res){
        const serie_id = mongoose.Types.ObjectId(req.params.id)
        const serie = await Serie.findByIdAndUpdate(serie_id,req.body,{new:true})
        res.send(serie)
    },
    async delete(req, res){
        const serie_id = mongoose.Types.ObjectId(req.params.id)
        const serie = await Serie.findByIdAndDelete(serie_id)
        res.status(200).send(serie)
    },
    async getSingle(req, res){
        const serie_id = mongoose.Types.ObjectId(req.params.id)
        const serie = await Serie.findById(serie_id)
        res.status(200).send(serie)
    },
    async getDownloadLink(base, chapter){
        const response = await axios.get(base+chapter)
        const data = response.data
        const table = data.substring(data.indexOf('<td>Zippyshare</td>'), data.indexOf('<td>Zippyshare</td>')+300)
        const href = table.substring(table.indexOf('href'), table.length)
        const link = href.match(/\"(.*?)\"/)[0]
        let txt = link.substring(1, link.length-1)
        txt = txt.substring(txt.indexOf('www'), txt.length)
        for (let index = 0; index < txt.length; index++) {
            txt = txt.replace('%2F','/')
        }
        txt = 'https://' + txt
        return await txt
    }
}

export default controller