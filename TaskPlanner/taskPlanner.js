let http = require('http')
let url=require('url')
let taskModule=require('./task')

let port = 9000
let addTask=`
    <h1>Task Planner</h1><hr/>
    <h3>Add task</h3><br/>
    <form action="/add" method="get" id="addTaskForm">
        <label>Emp Id: </label>
        <input type="text" name="empId"/><br/>
        <label>Task Id: </label>
        <input type="text" name="taskId"/><br/>
        <label>Task: </label>
        <input type="text" name="task"/><br/>
        <label>Deadline: </label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Add Task">
    </form><hr/>
    `
var delTask=`
    <h3>Delete task</h3></>
    <form action="/delete" method="get" id="delTaskForm">
        <label>Task Id: </label>
        <input type="text" name="tId"/><br/>
        <input type="submit" value="Delete Task">
    </form><hr/>
`

var listTasks = `
    <h3>List tasks</h3><br/>
    <form action="/list">
        <button>List All Tasks</button>
    </form><br/>`

let server = http.createServer((request,response)=>{
    let urlDetails=url.parse(request.url)
    response.setHeader("content-type","text/html")
    response.write(addTask)
    response.write(delTask)
    response.write(listTasks)
    if(urlDetails.pathname=='/add'){
        var data = url.parse(request.url,true).query
        var task = new taskModule.Task(data.empId, data.taskId, data.task, data.deadline)
        taskModule.storeRecords("tasks.json",data)
    }
    else if(urlDetails.pathname=='/delete'){
        var data = url.parse(request.url,true).query
        taskModule.deleteRecord("tasks.json",data.tId)
    }
    else if(urlDetails.pathname=='/list'){
        var data = url.parse(request.url,true).query
        var tasks=taskModule.retrieveRecords("tasks.json")
        response.write(`<table id="taskView">
        <tr>
            <th>Emp Id</th>
            <th>Task Id</th>
            <th>Task</th>
            <th>Deadline</th>
        </tr>`)
        tasks.forEach(task => {
            response.write(`<tr>`)
            response.write(`<td>${task.empId}</td>`)
            response.write(`<td>${task.taskId}</td>`)
            response.write(`<td>${task.task}</td>`)
            response.write(`<td>${task.deadline}</td>`)
            response.write(`</tr>`)
        });
        response.write(`</table>`)
    }
    response.end()
})

server.listen(port,()=>console.log(`Server is running on port ${port}`))