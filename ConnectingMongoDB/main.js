let app = require('express')()
let bodyParser = require('body-parser')
let obj = require('mongoose')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

let port = 9090

obj.Promise = global.Promise 
let url = "mongodb://localhost:27017/meanstack"
let mongooseDbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

let courseSchema = obj.Schema({
    _id:Number,
    cname:String,
    desc:String,
    amount:Number
})

let Course = obj.model("",courseSchema,"Courses")

let courses = []

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/add.html",(req,res)=>{
    res.sendFile(__dirname+"/add.html");
})

app.get("/update.html",(req,res)=>{
    res.sendFile(__dirname+"/update.html");
})

app.get("/delete.html",(req,res)=>{
    res.sendFile(__dirname+"/delete.html");
})

app.get("/fetch.html",(req,res)=>{
    obj.connect(url,mongooseDbOptions) 
    let db = obj.connection
    db.on("error",(error)=>{console.log(error)})
    db.once("open",()=>{ 
        Course.find({},(err,result)=>{
            if(!err){
                res.json(result)
            }
            obj.disconnect() 
        })
    })    
})

app.post("/add",(req,res)=>{
    obj.connect(url,mongooseDbOptions) 
    let db = obj.connection
    db.on("error",(error)=>{console.log(error)})
    db.once("open",()=>{ 
        let c = new Course(req.body)
        c.save((err,result)=>{
            if(!err){
                console.log("Course Record inserted successfully "+result)
            }
            else{
                console.log(err)
            }
            obj.disconnect() 
        })
    })    
    res.sendFile(__dirname+"/add.html");
})

app.post("/update",(req,res)=>{
    obj.connect(url,mongooseDbOptions) 
    let db = obj.connection
    db.on("error",(error)=>{console.log(error)})
    db.once("open",()=>{ 
        let cid = req.body.cid
        let amount = req.body.amount
        Course.updateOne({_id:cid},{$set:{amount:amount}},(err,result)=>{
            if(!err){
                if(result.nModified>0){
                    console.log("Course record updated successfully ")
                    console.log(result)
                }
                else{
                    console.log("Course Id invalid")
                }
            }
            obj.disconnect()
        })
    })    
    res.sendFile(__dirname+"/update.html");
})

app.post("/delete",(req,res)=>{
    obj.connect(url,mongooseDbOptions) 
    let db = obj.connection
    db.on("error",(error)=>{console.log(error)})
    db.once("open",()=>{ 
        let cid = req.body.cid
        Course.deleteOne({_id:cid},(err,result)=>{
            if(!err){
                if(result.deletedCount>0){
                    console.log("Course record deleted successfully ")
                    console.log(result)
                }
                else{
                    console.log("Course Id invalid")
                }
            }
            obj.disconnect()
        })
    })    
    res.sendFile(__dirname+"/delete.html");
})





app.listen(port, ()=>console.log(`Server is running on port ${port}`))