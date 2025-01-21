'use strict'

// Table Structure
// call t-body(tableBody)
let tablebody = document.getElementById("weatherTable").getElementsByTagName("tbody")[0];

// starter code
let daysWeather = [
    {"day": "Sunday", "temperature": 60, "rainfall": 0.2}, 
    {"day": "Monday", "temperature": 55, "rainfall": 0},
    {"day": "Tuesday", "temperature": 63, "rainfall": 0.3},
    {"day": "Wednesday", "temperature": 57, "rainfall": 0.25},
  ]

// function/loop through weather objects to create rows
function populateTable() {
  for (let i = 0; i < daysWeather.length; i++) {
    let weather = daysWeather[i];
    // new row on table
    let row = document.createElement("tr");

    // Create and append for properties
    for (let key in weather) {
      let cell = document.createElement("td");
      cell.textContent = weather[key];
      row.appendChild(cell);
    }
    tablebody.appendChild(row);
  }
}

// Calculate Temp
function calculateAverageTemperature() {
  let totalTemp = 0;
  let count = daysWeather.length;

  for (let i = 0; i < count; i++) {
    totalTemp += daysWeather[i].temperature;
  }

  let avgTemp = (totalTemp / count).toFixed(2);
  document.getElementById("avgTempResult").textContent = `Average Temperature: ${avgTemp} °F`;
}

// Day with Max Rain Function and loop
function findMaxRain(){
  let maxRain = -Infinity;
  let maxRainDay = "";

  for (let i = 0; i < daysWeather.length; i++) {
    if (daysWeather[i].rainfall > maxRain) {
      maxRain = daysWeather[i].rainfall;
      maxRainDay = daysWeather[i].day;
    }
  }
  document.getElementById("maxRainResult").textContent = `Day with Maximum Rain: ${maxRainDay} (${maxRain} inches)`;
}

document.getElementById("avgTempButton").addEventListener("click", calculateAverageTemperature);
document.getElementById("maxRainButton").addEventListener("click", findMaxRain);

populateTable();
