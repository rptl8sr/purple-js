const hasLicense = [ true, false ][Math.floor(Math.random() * 2)];
const age = [ 17.99999999, 18.00000001 ][Math.floor(Math.random() * 2)];
const isDrunk = [ true, false ][Math.floor(Math.random() * 2)];

console.log(`hasLicense: ${hasLicense}, age: ${age}, isDrunk: ${isDrunk}\nAnd you...`);
hasLicense && age >= 18 && !isDrunk ? console.log('You can drive!') : console.log('You can\'t drive!');
