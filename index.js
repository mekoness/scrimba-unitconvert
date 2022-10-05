const button = document.getElementById("convert-btn");
const textList = [
    lengthText = document.getElementById("length-txt"),
    volumeText = document.getElementById("volume-txt"),
    massText = document.getElementById("mass-txt")
];

button.addEventListener("click", function() {
    let numToConvert = document.getElementById("num-box").value;
    const metersToFeet = numToConvert * 3.281;
    const feetToMeters = numToConvert / 3.281;
    const litersToGallons = numToConvert * 0.264;
    const gallonsToLiters = numToConvert / 0.264;
    const kilosToPounds = numToConvert * 2.204;
    const poundsToKilos = numToConvert / 2.204;
    for (let i = 0; i < textList.length; i++) {
        if (textList[i] === lengthText) {
            textList[i].textContent = `${numToConvert} meters = ${metersToFeet.toFixed(3)} feet | ${numToConvert} feet = ${feetToMeters.toFixed(2)} meters`;
        } else if (textList[i] === volumeText) {
            textList[i].textContent = `${numToConvert} liters = ${litersToGallons.toFixed(3)} gallons | ${numToConvert} gallons = ${gallonsToLiters.toFixed(2)} liters`;
        } else if (textList[i] === massText) {
            textList[i].textContent = `${numToConvert} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numToConvert} pounds = ${poundsToKilos.toFixed(2)} kilos`;
        }        
    };
});