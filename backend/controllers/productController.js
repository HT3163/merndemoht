const Product = require('../models/productModel');


exports.createProduct = async(req,res,next) => {
    try {
        console.log('createProduct')
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product,
        })
    }catch(e) {
        res.status(401).json({
            success: false,
            e
        })
    }
}

exports.getProduct = async(req,res,next) => {
    try {
        console.log('GetProduct')
        const products = await Product.find();
        res.status(201).json({
            success: true,
            products,
        })
    }catch(e) {
        res.status(401).json({
            success: false,
            e
        })
    }
}
