const router = require("express").Router();
const Event = require("../model/event");


//CREATE PRODUCT
router.post("/",async (req,res)=>{
    const newEvent = new Event(req.body);

    try {
        const savedEvent = await newEvent.save(); 
        res.status(200).json(savedEvent)
    } catch(err){
        res.status(500).json(err)
    }
})

// UPDATE PRODUCT
router.put("/:id",async (req,res)=>{
    try{
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedEvent)
    } catch(err){
        res.status(500).json(err)
    }
})

//DELETE PRODUCT
router.delete("/:id",async (req,res)=>{
    try{
        await Event.findByIdAndDelete(req.params.id)

        res.status(200).json("Product had been deleted")
    } catch(err){
        res.status(500).json(err)
    }
})

//GET PRODUCT BY ID
router.get("/find/:id",async (req,res)=>{
    try{
        const event = await Event.findById(req.params.id)
        res.status(200).json(event)
    } catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS
router.get("/",async (req,res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try{
        let events;

        if (queryNew){
            events= await Product.find().sort({createdAt:-1}).limit(1);
      
        } else{
            events =  await Event.find();
        }
         
        res.status(200).json(events)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router