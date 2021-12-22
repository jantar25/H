const mongoose = require ("mongoose")


const SubscriberSchima = new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
},
{timestamps:true})

module.exports = mongoose.model("Subscriber",SubscriberSchima)