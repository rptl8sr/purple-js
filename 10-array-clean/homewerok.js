function generateRandomArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const sign = Math.random() < 0.5 ? -1 : 1;
    arr[i] = sign * Math.floor(Math.random() * 10);
  }

  return arr;
}

function filterArray(arr, callback) {
  const newArr = [];
  
  for (let el of arr) {
    if (callback(el)) {
      newArr.push(el);
    }
  }

  return newArr;
}

function isNegative(num) {
  return num < 0;
}

function isPositive(num) {
  return num >= 0;
}


const array = generateRandomArray();
console.log(`array: ${array}`);

const positiveArray = filterArray(array, isNegative);
console.log(`positiveArray: ${positiveArray}`);

const negativeArray = filterArray(array, isPositive);
console.log(`negativeArray: ${negativeArray}`);
