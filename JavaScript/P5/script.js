var button = document.querySelector("button");
var h3 = document.querySelector("h3");

var counter = 0;
button.addEventListener("click", function () {
  button.disabled = true;
  setInterval(function () {
    h3.textContent = counter++;
  }, 1000);
});
