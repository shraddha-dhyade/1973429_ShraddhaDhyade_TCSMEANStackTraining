let fs = require("fs")

class Task{
    constructor(empId, taskId, task, deadline){
        this.empId=empId
        this.taskId=taskId
        this.task=task
        this.deadline=deadline
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

function deleteRecord(file,id){
    jsonData = retrieveRecords(file)
    for(var i = 0; i < jsonData.length; i++){
        if(jsonData[i].taskId==id){
            jsonData.splice(i,1)
            break;
        }
    }
    fs.writeFileSync(file,JSON.stringify(jsonData)) 
}

module.exports={Task,storeRecords,retrieveRecords,deleteRecord}