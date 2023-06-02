function checkLuhn(cardNumber) {
  let digits;

  if (typeof cardNumber === 'string') {
    digits = cardNumber.split('').map(Number);
  } else if (typeof cardNumber === 'number') {
    digits = [];
    while (cardNumber > 0) {
      digits.push(cardNumber % 10);
      cardNumber = Math.floor(cardNumber / 10);
    }
    digits.reverse();
  }

  const sum = digits.reduce((acc, el, i) => {
    if (i % 2 !== 0) {
      return acc + el;
    } else {
      const doubled = el * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
  }, 0);

  return sum % 10 === 0;
}


// Visa and MasterCard numbers from  https://support.bluesnap.com/docs/test-credit-card-numbers
let cardNumber = '4263982640269299';
console.log(`${cardNumber}:`, checkLuhn(cardNumber)); // true

cardNumber = '2223000048410010';
console.log(`${cardNumber}:`, checkLuhn(cardNumber)); // true

cardNumber = '4917484589897107';
console.log(`${cardNumber}:`, checkLuhn(cardNumber)); // true

cardNumber = '5363982640269299'; // +1 for first two digits
console.log(`${cardNumber}:`, checkLuhn(cardNumber)); // false

cardNumber = '2223000048410001'; // replace last two digits
console.log(`${cardNumber}:`, checkLuhn(cardNumber)); // false
