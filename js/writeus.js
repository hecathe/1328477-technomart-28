var writeUs = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".pop-up-write");
var popupClose = writeUsPopup.querySelector(".pop-up-close");
var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var nameField = writeUsPopup.querySelector(".name-field");
var emailField = writeUsPopup.querySelector(".email-field");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("pop-up-show");

  if (storage) {
    nameField.value = storage;
    emailField.focus();
  } else {
    nameField.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("pop-up-show");
  writeUsPopup.classList.remove("pop-up-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("pop-up-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("pop-up-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("pop-up-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("pop-up-show");
      writeUsPopup.classList.remove("pop-up-error");
    }
  }
});
