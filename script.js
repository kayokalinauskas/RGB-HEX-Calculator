const rangeArray = document.querySelectorAll(".rangeInput");
const textArray = document.querySelectorAll(".textInput");
const color = document.querySelector(".color");
const hex = document.querySelector("#hexInput");

const rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

const fullColorHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue;
};

rangeArray.forEach((element, index) => {
    textArray[index].value = element.value;
    color.style.backgroundColor = `rgb(${textArray[0].value},${textArray[1].value},${textArray[2].value})`;
    hex.value = fullColorHex(
        textArray[0].value,
        textArray[1].value,
        textArray[2].value
    );

    rangeArray[index].addEventListener("input", function inputListener() {
        textArray[index].value = this.value;
        color.style.backgroundColor = `rgb(${textArray[0].value},${textArray[1].value},${textArray[2].value})`;
        hex.value = fullColorHex(
            textArray[0].value,
            textArray[1].value,
            textArray[2].value
        );
    });
});
