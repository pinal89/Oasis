document.getElementById("convertButton").addEventListener("click", function () {
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const unitSelector = document.getElementById("unitSelector");
  const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

  let convertedTemperature, resultUnit;

  if (selectedUnit === "celsius") {
    convertedTemperature = ((temperatureInput - 32) * 5) / 9;
    resultUnit = "°C";
  } else if (selectedUnit === "fahrenheit") {
    convertedTemperature = (temperatureInput * 9) / 5 + 32;
    resultUnit = "°F";
  } else if (selectedUnit === "kelvin") {
    convertedTemperature = temperatureInput - 273.15;
    resultUnit = "K";
  }

  document.getElementById(
    "resultArea"
  ).textContent = `Converted Temperature: ${convertedTemperature.toFixed(
    2
  )} ${resultUnit}`;
});
