const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const EventRoute = require("./routes/event")
const SubscriberRoute = require("./routes/Subscriber")


dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

app.use(cors());
app.use(express.json());
app.use("/events",EventRoute)
app.use("/subscriber",SubscriberRoute)

app.listen(process.env.PORT || 5000,()=>{
    console.log("BackEnd Server is running on port 5000")
})