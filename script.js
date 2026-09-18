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