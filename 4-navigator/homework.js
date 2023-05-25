// navigator
const addressLat = 0;
const addressLon = 0;
const positionLat = 0;
const positionLon = 0;

const distance = Math.sqrt(
  Math.pow(addressLat - positionLat, 2) + Math.pow(addressLon - positionLon, 2)
);

console.log(distance);
