function currencyConverter(amount, from='rub', to='usd') {
  const exchangeRates = {
    usd: 1,
    eur: 0.93,
    gbp: 0.81,
    rub: 79,
  }
  console.log(`amount: ${amount}, from: ${from}, to: ${to}`);

  if (from === to) amount;
  return !!exchangeRates[from] && !!exchangeRates[to] ? amount * exchangeRates[to] / exchangeRates[from] : null;
}


function getRandomInt(min=0, max=100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let amount = getRandomInt();
console.log(currencyConverter(getRandomInt()));

amount = getRandomInt();
console.log(currencyConverter(getRandomInt(), 'usd'));

amount = getRandomInt();
console.log(currencyConverter(getRandomInt(), 'eur'));

amount = getRandomInt();
console.log(currencyConverter(getRandomInt(), 'rub', 'rub'));

amount = getRandomInt();
console.log(currencyConverter(getRandomInt(), 'usd', 'rub'));

amount = getRandomInt();
console.log(currencyConverter(getRandomInt(), 'usd', 'tub'));
