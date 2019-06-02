
Array.prototype.forEach.call(document.querySelector("image1"), function (elem) {
    elem.addEventListener("click", function () {
        elem.classList.toggle("enlarged");
    });
});
