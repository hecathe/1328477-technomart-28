var buyLink = document.querySelectorAll(".buy-btn");
var cartPopup = document.querySelector(".pop-up-cart");
var cartClose = cartPopup.querySelector(".pop-up-close");
var contShopping = cartPopup.querySelector(".btn-continue-shopping");

for(var i = 0; i <= buyLink.length; i++) {
  buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("pop-up-show");
  });
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("pop-up-show");
  });

  contShopping.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("pop-up-show");
  })

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("pop-up-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("pop-up-show");
      }
    }
  });
}




