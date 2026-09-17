window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    if (scrollPosition < 300) {

        document.body.style.backgroundColor = "#f5f7fa";

    } else if (scrollPosition < 700) {

        document.body.style.backgroundColor = "#dff6ff";

    } else if (scrollPosition < 1100) {

        document.body.style.backgroundColor = "#fff4cc";

    } else {

        document.body.style.backgroundColor = "#e8dff5";

    }

});window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    if (scrollPosition < 300) {

        document.body.style.backgroundColor = "#164b99";

    } else if (scrollPosition < 700) {

        document.body.style.backgroundColor = "#dff6ff";

    } else if (scrollPosition < 1100) {

        document.body.style.backgroundColor = "#927409";

    } else {

        document.body.style.backgroundColor = "#e8dff5";

    }

});function orderOnWhatsApp(productName, price) {

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