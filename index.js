const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const viewpath = path.join(__dirname,'')
const request = require('request')
app.use(express.static(viewpath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine','ejs')


app.get('',(req,res)=>{
   
   const url = "http://www.freeforexapi.com/api/live?pairs=EURGBP,USDJPY";
   request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect mapbox!',undefined)
        }else{
            res.send(response);
        }
    })
}) 

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})
