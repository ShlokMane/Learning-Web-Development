var progress = document.querySelector("#progress");

var count = 0;
var interval = setInterval(function () {
  count++;
  progress.style.width = count + "%";
  if (count === 100) {
    clearInterval(interval);
  }
}, 100);
