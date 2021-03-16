// function retrieveFromSession(){
//     for(var i = 0; i < sessionStorage.length; i++){
//         var obj = sessionStorage.getItem(i)
//         console.log(obj)
//     }
// }
var totalBudget = 0;

function retrieveClientInfo(){
    var table = document.getElementById("clientList")
    console.log(table)
    var body = table.getElementsByTagName("tbody")[0]
    for(var i = 0; i < sessionStorage.length; i++){
        var empJson = JSON.parse(sessionStorage.getItem(i))
        console.log("id is " + i)
        console.log("Client Name " + empJson.clientName)
        console.log("Project Name " + empJson.projectName)
        console.log("Budget " + empJson.budget)
        var newRow = body.insertRow(body.length)        //row created
        var cell1 = newRow.insertCell(0);               //cell created
        cell1.innerHTML=empJson.clientName                      //value placed
        var cell2 = newRow.insertCell(1);               //cell created
        cell2.innerHTML=empJson.projectName                      //value placed
        var cell3 = newRow.insertCell(2);  
        var budget = empJson.budget             //cell created
        cell3.innerHTML=budget                      //value placed
        totalBudget+=Number(budget)
    }
    document.getElementById("divTotal").innerHTML="Total Budget = " + totalBudget;
    
    
    // var cell2 = newRow.insertCell(1);               //cell created
    // cell2.innerHTML=data.age                       //value placed
}
// retrieveFromSession();
retrieveClientInfo();