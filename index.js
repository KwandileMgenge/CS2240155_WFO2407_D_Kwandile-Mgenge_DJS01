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

const newDistanceKm = initialDistanceKm + (initialVelocityKmPerH * timeSeconds) //calcultes new distance
const remainingFuelKg = fuelBurnRateKgPerSec * timeSeconds //calculates remaining fuel
const newVelocityKmPerH = calcNewVelocity(accelerationMPerSec2, initialVelocityKmPerH, timeSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVelocity = (acceleration, velocity, time) => { 
  return velocity + (acceleration * time)
}

console.log(`Corrected New Velocity: ${newVelocityKmPerH} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg} kg`);






