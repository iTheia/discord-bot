import mongoose from 'mongoose'

const Schema = mongoose.Schema

const utilSchema = Schema({
    currentSerie:{
        type:String
    }
}, {timestamps:true})

const Util = mongoose.model('Util', utilSchema)

export default Util