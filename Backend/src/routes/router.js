const express = require('express')
const router = new express.Router()
const Ride = require('../models/ride');
const Cab = require('../models/cab');
const Booking = require('../models/booking');


router.post('/ride',async(req,res)=>{
    const ride = new Ride(req.body);
  
    try{
        await ride.save();
        res.status(201).send(
            {
                "id": ride.id,
            }
        );
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/cab',async(req,res)=>{
    const cab = new Cab(req.body);
  
    try{
        await cab.save();
        res.status(201).send(
            {
                "id": cab.id,
            }
        );
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/booking',async(req,res)=>{
    const booking = new Booking(req.body);
  
    try{
        await booking.save();
        res.status(201).send(
            {
                "id": booking.id,
            }
        );
    }catch(e){
        res.status(400).send(e);
    }
})


router.get('/cab', async (req,res)=>{
    var lat = req.query.lat;
    var long  = req.query.long;

    try{
        const meme = await Meme.findOne(
            {_id},
            'name caption url'
        );

        if(!meme){
            return res.status(404).send();
        }
        res.send(meme);
    }catch(e)
    {
        res.status(500).send(e);
    }
});


module.exports = router;