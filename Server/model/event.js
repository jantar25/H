const mongoose = require ("mongoose")


const EventSchima = new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        description:{type:String,required:true},
        img:{type:String,required:true},
        likes : {type : [String],default: []},
        comments: {type : [String],default: []},
},
{timestamps:true})

module.exports = mongoose.model("Event",EventSchima)