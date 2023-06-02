const userName = '😉Johnny';

console.log(userName[0] + userName[1]);
console.log(userName.charAt(2));

console.log(userName.length);
console.log(userName.indexOf('n')); // 5 
console.log(userName.lastIndexOf('n')); // 6

const word = 'hello';
console.log(word.includes('l'));
console.log(word.startsWith('he'));
console.log(word.endsWith('lo'));
console.log(word.replace(/l/g, 'L'));

// string add
const film = 'Star Wars ';
console.log(film.padStart(20, '-'));
console.log(film.padEnd(20, '-'));
console.log(film.repeat(3));
console.log(film.concat('!'));

// mask
const cardNumber = '1234567890123456';
console.log(cardNumber.slice(-4).padStart(16, '*'));