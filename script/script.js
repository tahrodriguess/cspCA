////////////////USER GENERATOR///////////////////
document.getElementById('userBtn').addEventListener('click', getData);

function getData(){
    
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
             
             let user =  data.results;
             

             //get data value
             let output = "<h2><center>Costumers</center></h2>"

             //ger data. It will show only 5 costumers//
             user.slice(-5).forEach(function(lists) {
                output += `
                <div class="user">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            document.getElementById('output').innerHTML= output;
        });
    }; 

//js working while page loading//  
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
//add to cart//
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('menu-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
//Action after click on purchase button//
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

//remove item from cart//
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
//Item button to add to cart//
function addToCartClicked(event) {
    var button = event.target
    var menuItem = button.parentElement.parentElement
    var title = menuItem.getElementsByClassName('menu-item-title')[0].innerText
    var price = menuItem.getElementsByClassName('menu-item-price')[0].innerText
    addItemToCart(title, price)
    updateCartTotal()
}
//Itens added to cart//
function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//cart total//
//CHECK THIS PART E REDO MAYBE DO GROUP CLASSES//

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}
