const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function updateTemperatures() {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    const kelvinTemp = celsiusTemp + 273.15;

    fahrenheitInput.value = isNaN(fahrenheitTemp) ? "" : fahrenheitTemp.toFixed(2);
    kelvinInput.value = isNaN(kelvinTemp) ? "" : kelvinTemp.toFixed(2);
}

celsiusInput.addEventListener('input', updateTemperatures);

function updateTemperaturesFahrenheit() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * 5/9;
    const kelvinTemp = (fahrenheitTemp - 32) * 5/9 + 273.15;

    celsiusInput.value = isNaN(celsiusTemp) ? "" : celsiusTemp.toFixed(2);
    kelvinInput.value = isNaN(kelvinTemp) ? "" : kelvinTemp.toFixed(2);
}

fahrenheitInput.addEventListener('input', updateTemperaturesFahrenheit);

function updateTemperaturesKelvin() {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celsiusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = (kelvinTemp - 273.15) * 9/5 + 32;

    celsiusInput.value = isNaN(celsiusTemp) ? "" : celsiusTemp.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitTemp) ? "" : fahrenheitTemp.toFixed(2);
}

kelvinInput.addEventListener('input', updateTemperaturesKelvin);
