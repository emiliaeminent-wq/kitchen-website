// BACKGROUND COLOR WHEN SCROLLING

window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    let pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let scrollPercent =
        (scrollPosition / pageHeight) * 100;


    if (scrollPercent < 20) {

        document.body.style.backgroundColor = "#f5f7fa";

    } else if (scrollPercent < 40) {

        document.body.style.backgroundColor = "#dff6ff";

    } else if (scrollPercent < 60) {

        document.body.style.backgroundColor = "#fff4cc";

    } else if (scrollPercent < 80) {

        document.body.style.backgroundColor = "#e8dff5";

    } else {

        document.body.style.backgroundColor = "#d9f7e8";

    }

});


// WHATSAPP ORDER

function orderOnWhatsApp(productName, price) {

    let message =
        "Hello, I want to order the " +
        productName +
        " for GH₵ " +
        price +
        ".";

    let whatsappNumber = "233244247564";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}
function searchProducts() {

    let searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let productName = product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

}
// SHOPPING CART

let cart = [];


// ADD PRODUCT TO CART

function addToCart(productName, price) {

    let existingProduct = cart.find(
        item => item.name === productName
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });

    }

    updateCart();

}


// UPDATE CART DISPLAY

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    let cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0.00";

        return;

    }


    cart.forEach(function(item, index) {

        let itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        let cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <strong>${item.name}</strong>

                <p>
                    GH₵ ${item.price.toFixed(2)}
                </p>

            </div>


            <div class="quantity-controls">

                <button onclick="changeQuantity(${index}, -1)">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="changeQuantity(${index}, 1)">
                    +
                </button>

            </div>


            <div class="cart-item-total">

                GH₵ ${itemTotal.toFixed(2)}

            </div>


            <button
                class="remove-button"
                onclick="removeFromCart(${index})"
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        total.toFixed(2);

}


// CHANGE QUANTITY

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}