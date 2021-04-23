let fs = require('fs')
let mongoClient=require('mongodb').MongoClient
let url= "mongodb://localhost:27017"

function retrieveRecords(file){
    var jsonSync = fs.readFileSync(file).toString()
    var jsonParse = []
    if(!(jsonSync=="")){
        jsonParse = JSON.parse(jsonSync)
    }  
    return jsonParse
}

callData = retrieveRecords("call_data.json")
// callData.forEach((d)=>console.log(d))
mongoClient.connect(url,(err1,client)=>{
    let db = client.db("callRecords")
    if(!err1){
        console.log("Connection Successful")
        db.collection("Calls").insertMany(callData,(err2,result)=>{
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
