import mongoose from 'mongoose'

const Schema = mongoose.Schema

const serieSchema = Schema({
    downloadLink:{
        type:String
    },
    serie:{
        type:String
    },
    base:{
        type:String
    },
    chapter:{
        type:Number
    },
    next:{
        type:Number
    }
}, {timestamps:true})

const Serie = mongoose.model('Serie', serieSchema)

export default Serie