/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-txt");
const volumeText = document.getElementById("volume-txt");
const massText = document.getElementById("mass-txt");

button.addEventListener("click", function() {
    let numToConvert = document.getElementById("num-box").value;
    lengthText.textContent = numToConvert;
})