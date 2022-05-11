const express=require('express')
var requests=require('requests');
// const http=require('http');

const app=express();

app.get('/getData',(req,res)=>{
    
    requests("https://rest.coinapi.io/v1/exchanges?apikey=C6C87558-2BCB-4031-A959-F20D4F51D8ED"

    )
    .on("data",(chunk)=>{
       
        const obj=JSON.parse(chunk);
        
        console.log(obj);
        res.status(200).json(obj);
    })
    .on("end",(err)=>{
       if(err)
       return console.log("connection closed due to errors",err)
       console.log("end")
    })

    


})




app.listen(3000,(req,res)=>{
    console.log("Port is running on 3000")
})