const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Ride' 
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cab' 
    },
    price: {
        type: Number
    }
})


const Booking = mongoose.model('booking', bookingSchema)

module.exports = Booking;


