
//2
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

//3
dotenv.config()
//4
const {Schema} = mongoose

const newSchema = new Schema({
   
    img:{type:String,required:true},
    name:{type:String,required:true},
    job:{type:String,required:true}



})

const Users = mongoose.model("userz",newSchema)

//5
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})


//6 get all 

app.get("/userz",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
           
                res.send(docs)
        }
        else{
            res.status.apply(404).json({message:err})
        }
    })
})

//7 get   by id

app.get("/userz/:id",(req,res)=>{

    const {id}=req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
          if(doc){
            res.send(doc)
          }
          else{
            res.status(404).json({message:"Not Found"})
          }
    
        }
        else{
res.status(500).json({message:err})
        }
    })
})

//8 delete

app.delete("/userz/:id",(req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//9 post 

app.post("/userz",(req,res)=>{
 
    const user = new Users({
    img:req.body.img,
      name:req.body.name,
      job:req.body.job

    })
    user.save()
    res.send("added")
})

//10 

const Port = process.env.PORT
const Url = process.env.Url.replace("<password>",process.env.PASSWORD)

mongoose.set("strictQuery",true)
mongoose.connect(Url,(err)=>{
    if(!err){
        console.log("db connected");
        app.listen(Port,()=>{
            console.log("server loading");
        })
    }
    else{
        console.log("disconnect");
    }
    
})



