const express =require("express");
const cors = require("cors")
const {MongoClient, ServerApiVersion}=require("mongodb");
require("dotenv").config();

const app = express()
const port = process.env.PORT ||5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.0w2mrif.mongodb.net/?retryWrites=true&w=majority`;


// middleware
app.use(cors())
app.use(express.json());



const client = new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

 async function run(){
    try{
       await client.connect();
       console.log("Ping my Project : mongodb connect success full");
    }finally{
    //    await client.close();
    }
 }
 run().catch(console.dir);


app.get("/",(req,res)=>{
    res.send("Car doctor start")
})

app.listen(port,()=>{
    console.log(`Car docter server is running ${port}`);
})