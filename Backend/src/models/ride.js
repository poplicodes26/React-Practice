const mongoose = require('mongoose')

const rideSchema = mongoose.Schema({
    currentLocation: {
        type: String,
    },
    destination: {
        type: String,
        trim: true
    },
    lat: {
        type: Number,
    },
    long: {
        type: Number
    }
})


const Ride = mongoose.model('ride', rideSchema)

module.exports = Ride


