
var scroll=window.requestAnimationFrame ||
function(callback) {
    window.setTimeout(callback, 1000/60)
};

var headerElement = document.querySelectorAll('.js-header')
function headerImage() {
headerElement.forEach(function(element) {
    if (inScreen(element)) {
        var windowHeight= window.innerHeight+"px";
        document.querySelector('header').style.height=windowHeight;
    }
});
scroll(headerImage)
}

headerImage();

function inScreen(item) {
var bound = item.getBoundingClientRect();
return (
    bound.top >= 0 && bound.left >=0
)
}
var element = document.querySelector(".js-hide");
var element2 = document.querySelector(".js-appear");

function changeText() {
    element.classList.toggle("hidden");
    element2.classList.remove("hidden")
}

function newText() {
    element.classList.remove("hidden");
    element2.classList.toggle("hidden")
}