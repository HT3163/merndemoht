const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Please Enter Product Name"],
        trim: true,
    },
    price: {
        type: Number,
        require: [true, "Please Enter Product Price"],
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = new mongoose.model('Product',productSchema);
