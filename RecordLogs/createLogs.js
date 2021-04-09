let obj = require("./createLogModule")

let data = new Array()

var flag = true;
var ch = ""


console.log("Enter records below:\n")
while(flag){
    var record = new obj.Record()
    record.getRecord()
    data.push(record)
    ch = obj.obj.question("Do you wish to log more records? [y/n]: ")
    flag = (ch=="y" ? true : false) 
    debugger 
}

obj.storeRecords("log.json",data)
debugger
console.log("\n\nStored Records Successfully!\n\n")