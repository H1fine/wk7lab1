'use strict'
// starter code
let daysWeather = [
    {"day": "Sunday", "temperature": 60, "rainfall": 0.2}, 
    {"day": "Monday", "temperature": 55, "rainfall": 0},
    {"day": "Tuesday", "temperature": 63, "rainfall": 0.3},
    {"day": "Wednesday", "temperature": 57, "rainfall": 0.25},
  ]

// call t-body(tableBody)
let tablebody = document.querySelector("weatherTable tbody");

// loop through weather objects to create rows
for (let weather of daysWeather) {
  // new row on table
  let row = document.createAttribute("tr");

  // Create and append for properties

  for (let key in weather) {
    let cell = document.createElement("td");
    cell.textContent = weather[key];
    row.appendChild(cell);
  }
}