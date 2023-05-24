const hasLicense = confirm('Do you have a license?');
const age = prompt('How old are you?');
const isDrunk = confirm('Are you drunk?');

hasLicense && age >= 18 && !isDrunk ? alert('You can drive!') : alert('You can\'t drive!');
