var button = document.getElementById("button");
var body = document.getElementById("body");
button.addEventListener("click", function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
});
