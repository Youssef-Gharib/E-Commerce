let nav_bar = document.getElementById('navbar');
let remove_cart = document.getElementById('remo-cart');
function func(){
    nav_bar.style.right = 0; 
    remove_cart.remove();
}
function clos_func(){
    nav_bar.style.right = '-300px'; 
}


var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

//active button
var header = document.getElementById("paginations");
var pag = header.getElementsByClassName("pag");
for (var i = 0; i < pag.length; i++) {
    pag[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}


// 
// let cart_icon = document.getElementsByClassName('cart');
// let counter = document.getElementsById('cart-wrapper-items');
// cart_icon.onclick = function counter() {

//                     }

  
// dv



