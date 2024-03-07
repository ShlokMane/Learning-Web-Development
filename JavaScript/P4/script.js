var input = document.querySelector("input");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");

var ul = document.querySelector("ul");
add.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});

remove.addEventListener("click", function () {
  if (ul.childElementCount > 0) {
    ul.removeChild(ul.lastChild);
  }
});
