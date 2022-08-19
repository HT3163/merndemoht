const app = require('./app.js');
const connectDatabase = require('./config/database.js');
const path = require('path')

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require('dotenv').config({path:'backend/config/config.env'})
}


connectDatabase();



app.listen(process.env.PORT,()=> {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})