let app=require('express')()
let http=require("http").Server(app)
let io=require('socket.io')(http)
let mongoClient=require('mongodb').MongoClient
let url= "mongodb://localhost:27017"

let port = 9090

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
io.on("connection",(socket)=>{
    socket.on("chat",(msg)=>{
        mongoClient.connect(url,(err1,client)=>{
            let db = client.db("chatlog")
            if(!err1){
                console.log("Connection Successful")
                db.collection("Messages").insertOne({msg: msg},(err2,result)=>{
                    if(!err2){
                        console.log(result)
                    }
                    else{
                        console.log(err2)
                    }
                })
            }
            else{
                console.log("Error "+err1)
            }
            client.close()
        })
    })
})

http.listen(port,()=>console.log("Server is running on port "+port))