let obj = require("readline-sync")
let fs = require("fs")
let dateformat = require("dateformat")

class Record{
    fname;
    lname;
    gender;
    email;

    getRecord() {
        this.fname = obj.question("Enter First Name: ")
        this.lname = obj.question("Enter Last Name: ")
        this.gender = obj.question("Enter Gender: ")
        this.email =  obj.question("Enter Email: ")
        var fullDate = dateformat(Date.now(), "mm-dd-yyyy hh:MM:ss").split(" ")
        this.date = fullDate[0]
        this.time = fullDate[1] 
    }    
}

function storeRecords(file,data){
    var jsonData = retrieveRecords(file)
    jsonData = jsonData.concat(data)    
    fs.writeFileSync(file,JSON.stringify(jsonData))
}

function retrieveRecords(file){
    var jsonSync = fs.readFileSync(file).toString()
    var jsonParse = []
    if(!(jsonSync=="")){
        jsonParse = JSON.parse(jsonSync)
    }  
    return jsonParse
}

module.exports={Record,storeRecords,obj}