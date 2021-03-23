var Item = /** @class */ (function () {
    function Item(varId, varName, varPrice, varImg) {
        this.varId = varId;
        this.varName = varName;
        this.varPrice = varPrice;
        this.varImg = varImg;
        this.id = varId;
        this.name = varName;
        this.price = varPrice;
        this.img = varImg;
    }
    Item.prototype.onAddClick = function () {
        var storedData = sessionStorage.getItem("cartItems");
        var storedCart = JSON.parse(storedData);
        storedCart.push(itemArr[this.id]);
        sessionStorage.setItem("cartItems", JSON.stringify(storedCart));
        var cartTotalData = sessionStorage.getItem("cartTotal");
        var total = JSON.parse(cartTotalData);
        total += Number(itemArr[this.id].price);
        sessionStorage.setItem("cartTotal", JSON.stringify(total));
        var cartSizeData = sessionStorage.getItem("cartSize");
        var cartSize = JSON.parse(cartSizeData);
        cartSize++;
        sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
        var cartDiv = document.getElementById("cartDiv");
        cartDiv.innerHTML = "Cart Size " + JSON.parse(sessionStorage.getItem("cartSize"));
    };
    return Item;
}());
var cartItemArr = new Array();
sessionStorage.setItem("cartItems", JSON.stringify(cartItemArr));
var cartTotal = 0;
sessionStorage.setItem("cartTotal", JSON.stringify(cartTotal));
var cartSize = 0;
sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
var itemArr = new Array();
itemArr.push(new Item(0, "Credit Secrets", "25.99", "./ItemImages/credit-secrets.png"));
itemArr.push(new Item(1, "Hobbit", "44.99", "./ItemImages/hobbit.jpg"));
itemArr.push(new Item(2, "Know the World", "18.99", "./ItemImages/know-the-world.jpg"));
itemArr.push(new Item(3, "Mae Among the Stars", "17.99", "./ItemImages/mae-among-the-stars.jpg"));
itemArr.push(new Item(4, "Simple Kitchen", "11.99", "./ItemImages/simple-kitchen.jpg"));
itemArr.push(new Item(5, "Taylor's Very Own Name", "24.99", "./ItemImages/taylors-very-own-name.jpg"));
itemArr.push(new Item(6, "The Day You Begin", "29.99", "./ItemImages/the-day-you-begin.jpg"));
itemArr.push(new Item(7, "The Giver of Stars", "15.99", "./ItemImages/the-giver-of-stars.jpg"));
itemArr.push(new Item(8, "The Travel Book", "34.99", "./ItemImages/the-travel-book.jpg"));
function displayItems() {
    var cartDiv = document.getElementById("cartDiv");
    cartDiv.innerHTML = "Cart Size " + JSON.parse(sessionStorage.getItem("cartSize"));
    var div = document.getElementById("itemsDiv");
    for (var i = 0; i < itemArr.length; i++) {
        var itemDiv = document.createElement("div");
        // itemDiv.classList.add("row");
        var itemName = document.createElement("p");
        var item = itemArr[i];
        itemName.textContent = item.name;
        var itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        var itemImg = document.createElement("img");
        itemImg.src = item.img;
        itemImg.style.height = "250px";
        itemImg.style.width = "250px";
        var addButton = document.createElement("button");
        addButton.innerHTML = "Add";
        addButton.setAttribute("id", item.id.toString());
        addButton.addEventListener("click", item.onAddClick);
        var hr = document.createElement("hr");
        itemDiv.classList.add("col-4");
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(addButton);
        itemDiv.appendChild(hr);
        div.appendChild(itemDiv);
    }
}
;
