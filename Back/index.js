const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const db = require('./Config/db')
const routes = require('./Routes/Routes')




app.use(cors())
app.use(express.json());




app.use('/products',routes)




app.listen(port,()=>{
    console.log("server is runing good");
    

})