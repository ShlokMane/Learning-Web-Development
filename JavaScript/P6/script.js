var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var homeText = document.querySelector("#homeText");
var aboutText = document.querySelector("#aboutText");
var contactText = document.querySelector("#contactText");

homeText.style.display = "block";
homeText.style.width = "50%";
aboutText.style.width = "50%";
contactText.style.width = "50%";

home.addEventListener("click", function (e) {
  homeText.style.display = "block";
  aboutText.style.display = "none";
  contactText.style.display = "none";
});

about.addEventListener("click", function (e) {
  homeText.style.display = "none";
  aboutText.style.display = "block";
  contactText.style.display = "none";
});

contact.addEventListener("click", function (e) {
  homeText.style.display = "none";
  aboutText.style.display = "none";
  contactText.style.display = "block";
});

// You can use querySelectorAll and make the display none of all then make display: block of the h3 you want to display
