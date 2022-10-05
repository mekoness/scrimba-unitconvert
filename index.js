/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-txt");
const volumeText = document.getElementById("volume-txt");
const massText = document.getElementById("mass-txt");
const textList = [lengthText, volumeText, massText]

button.addEventListener("click", function() {
    let numToConvert = document.getElementById("num-box").value;
    const metersToFeet = numToConvert * 3.281;
    const feetToMeters = numToConvert / 3.281;
    const litersToGallons = numToConvert * 0.264;
    const gallonsToLiters = numToConvert / 0.264;
    const kilosToPounds = numToConvert * 2.204;
    const poundsToKilos = numToConvert / 2.204;
    lengthText.textContent = `${numToConvert} meters = ${metersToFeet.toFixed(2)} feet | ${numToConvert} feet = ${feetToMeters.toFixed(2)} meters`;
    volumeText.textContent = `${numToConvert} liters = ${litersToGallons.toFixed(2)} gallons | ${numToConvert} gallons = ${gallonsToLiters.toFixed(2)} liters`;
    massText.textContent = `${numToConvert} kilos = ${kilosToPounds.toFixed(2)} pounds | ${numToConvert} pounds = ${poundsToKilos.toFixed(2)} kilos`;
});
    