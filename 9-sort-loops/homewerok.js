function generateRandomArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const sign = Math.random() < 0.5 ? -1 : 1;
    arr[i] = sign * Math.floor(Math.random() * 10);
  }

  return arr;
}

function bubbleSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const array = generateRandomArray();
console.log(`array: ${array}`);

const result = bubbleSort(array);
console.log(`result: ${result}`);