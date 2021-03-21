const express = require('express')
const router = new express.Router()
const Ride = require('../models/ride');
const Cab = require('../models/cab');
const Booking = require('../models/booking');
var GeoPoint = require('geopoint');

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

router.get('/booking/:id',async(req,res)=>{
    var booking = await Booking.find({driver: req.params.id});
  
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


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

router.get('/cab', async (req,res)=>{
    var lat = req.query.lat;
    var long  = req.query.long;
    console.log(lat)
    try{
        
        const cabs = await Cab.find({});
        var nearbyCab = {data:[]};

        cabs.forEach((i)=>{
            var distance = getDistanceFromLatLonInKm(lat, long, i.lat, i.long)//output in kilometers
            if(distance < 5)
            {
                nearbyCab.data.push(i);
            }
        })
        
        res.send(nearbyCab);
    }catch(e)
    {
        res.status(500).send(e);
        console.log(e);
    }
});

module.exports = router;