const express = require('express');
const product = require('./routes/productRoute');
const {createProduct} = require('./controllers/productController')
// const dotenv = require('dotenv');
const path = require('path')


const app = express();
app.use(express.json());

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require('dotenv').config({path:'backend/config/config.env'})
}

app.use('/api/v1',product);



app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});




module.exports = app;