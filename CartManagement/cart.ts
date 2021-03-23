var storedData = sessionStorage.getItem("cartItems");
var storedCart = JSON.parse(storedData);

var cartTable = document.getElementById("cartTable")

var body = cartTable.getElementsByTagName("tbody")[0]

for(let i = 0; i < storedCart.length; i++){
    var newRow = body.insertRow(body.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=storedCart[i].name;
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML=storedCart[i].price  
}
document.getElementById("cartTotal").innerHTML="Total Price = " + JSON.parse(sessionStorage.getItem("cartTotal")).toFixed(2);