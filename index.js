/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmPerH = 10000; // velocity (km/h)
const accelerationMPerSec2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSec = 0.5; // fuel burn rate (kg/s)

// Helper function to convert
const convertKmPerHToMPerSec = (velocityKmPerH) => velocityKmPerH * (1000 / 3600); // km/h to m/s
const convertMPerSecToKmPerH = (velocityMPerSec) => velocityMPerSec * (3600 / 1000); // m/s to km/h

// Calculate new distance (in km) with time in hours
const timeHours = timeSeconds / 3600; // convert time to hours for distance calculation
const newDistanceKm = initialDistanceKm + (initialVelocityKmPerH * timeHours) //calcultes new distance

// Calculate remaining fuel
const remainingFuelKg = initialFuelKg - (fuelBurnRateKgPerSec * timeSeconds)

// Function call
const newVelocityKmPerH = calcNewVelocity(accelerationMPerSec2, initialVelocityKmPerH, timeSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (acceleration, velocity, time) => { 
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof time !== 'number') {
    throw new Error("All parameters must be numbers.");
  }
  if (acceleration < 0 || velocity < 0 || time < 0) {
    throw new Error("Parameters must be positive values.");
  }
}

console.log(`Corrected New Velocity: ${newVelocityKmPerH} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg} kg`);






