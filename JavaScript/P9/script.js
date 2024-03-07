var textarea = document.querySelector("textarea");
var span1 = document.querySelector("#span1");
textarea.addEventListener("input", function () {
  span1.textContent = textarea.value.length;
});
