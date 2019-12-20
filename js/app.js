const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundToDecimal(num) {
    return Math.round(num * 100) / 100;
}

function celciusToFahrenheitAndToKelvin() {
    const celciusTemp = parseFloat(celciusInput.value);
    const fahrenheitTemp = (celciusTemp * (9 / 5)) + 32;
    const kelvinTemp = celciusTemp + 273.15;
    fahrenheitInput.value = roundToDecimal(fahrenheitTemp);
    kelvinInput.value = roundToDecimal(kelvinTemp);
}

function fahrenheitToCelciusAndKelvin() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);
    const celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
    kelvinInput.value = roundToDecimal(kelvinTemp);
    celciusInput.value = roundToDecimal(celciusTemp);
}

function kelvinToCelciusAndToFahrenheit() {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celciusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = kelvinTemp * (9 / 5) - 459.67;
    celciusInput.value = roundToDecimal(celciusTemp);
    fahrenheitInput.value = roundToDecimal(fahrenheitTemp);
}

function main() {
    celciusInput.addEventListener('input', celciusToFahrenheitAndToKelvin);

    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);

    kelvinInput.addEventListener('input', kelvinToCelciusAndToFahrenheit);
}

main();
