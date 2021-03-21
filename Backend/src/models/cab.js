const mongoose = require('mongoose')

const cabSchema = mongoose.Schema({
    vehicle: {
        type: String,
        required: true,
    },
    12345678: {
        type: Number,
    },
    phoneNo: {
        type: Number,
    },
    charge: {
        type: Number,
    },
    lat: {
        type: Number,
    },
    long: {
        type: Number
    }
})


const Cab = mongoose.model('cab', cabSchema)

module.exports = Cab


