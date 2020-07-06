var mapLink = document.querySelector(".image-map");
var mapPopup = document.querySelector(".pop-up-map");
var mapClose = mapPopup.querySelector(".pop-up-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("pop-up-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("pop-up-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("pop-up-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("pop-up-show");
    }
  }
});
