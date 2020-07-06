var buyLink = document.querySelectorAll(".buy-btn");
var cartPopup = document.querySelector(".pop-up-cart");
var cartClose = cartPopup.querySelector(".pop-up-close");

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("pop-up-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("pop-up-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("pop-up-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("pop-up-show");
    }
  }
});

