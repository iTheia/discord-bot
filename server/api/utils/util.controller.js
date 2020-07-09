import Util from './util.model'

const controller = {
    async getCurrentSerie(req, res){
        const currentSerie = await Util.findOne().sort({x:1}).select('currentSerie')
        res.status(200).send(currentSerie)
    },
    async createCurrentSerie(req, res){
        const util = new Util(req.body)
        await util.save()
        res.send(util)
    }
}

export default controller