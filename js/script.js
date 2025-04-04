$(document).ready(function () {
    $(".add-to-cart").click(function () {
        $("#cart-items").append("<li>Porsche - $500000</li>").listview("refresh");
        alert("Item added to cart!");
    });
});