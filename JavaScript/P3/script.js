var form = document.querySelector("form");
var input1 = document.querySelectorAll("input[type=text]");
var h4 = document.querySelector("h4");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (var i = 0; i < input1.length; i++) {
    if (input1[i].value.trim() === "") {
      h4.textContent = "Kuch toh likh bhai";
      h4.style.color = "red";
      break;
    } else {
      h4.textContent = h4.textContent + " " + input1[i].value.trim();
    }
  }
});
