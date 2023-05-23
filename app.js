// navigator

const addressLat = prompt('Enter address latitude');
const addressLon = prompt('Enter address longitude');
const positionLat = prompt('Enter position latitude');
const positionLon = prompt('Enter position longitude');

const distance = Math.sqrt(
  Math.pow(addressLat - positionLat, 2) +
  Math.pow(addressLon - positionLon, 2)
);

alert(`Distance is ${distance} km.`);