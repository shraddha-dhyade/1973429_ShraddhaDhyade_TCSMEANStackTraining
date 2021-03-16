var clientArray = [];

function readFormData(){
    var client = {}  //empty Objct
    client.clientName = document.getElementById("clientName").value
    client.projectName = document.getElementById("projectName").value
    client.budget = document.getElementById("budget").value
    console.log(client)
    return client
}

function onFormSubmit(){
    var idx = sessionStorage.length
    var data = readFormData()
    clientArray.push(data)  //store in list or array
    sessionStorage.setItem(idx, JSON.stringify(data))
    // idx++
}

function resetData(){
    document.getElementById("clientName").value=""
    document.getElementById("projectName").value=""
    document.getElementById("budget").value=""
}


