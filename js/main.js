/* open & close cart */

var cart = document.querySelector(".cart");
var open_cart = document.querySelector(".icon_cart");
var close_cart = document.querySelector(".close_cart");

open_cart.onclick = function(){
    cart.classList.add("active");
}

close_cart.onclick = function(){
    cart.classList.remove("active");
}
document.body.onclick = function(event) {
    if (!cart.contains(event.target) && !open_cart.contains(event.target) && !close_cart.contains(event.target)) {
        cart.classList.remove("active");
    }
}
