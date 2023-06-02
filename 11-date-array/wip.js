const arr = [1, 2, 3, 4, 5];


// forEach
for (const [i, el, sourceArr] of arr.entries()) {
  console.log(el, i);
}

arr.forEach((el, i) => console.log(el, i));


// map
const newArr = arr.map((el, i, arr) => el * 2);


// filter 
const evens = arr.filter(el => el % 2 === 0);


// reduce
const sum = arr.reduce((acc, el, i) => acc + el, 0);
const evenSum = arr.reduce((acc, el, i) => acc + (el % 2 === 0 ? el : 0), 0);

// find & findIndex
const firstEven = arr.find((el, i) => el % 2 === 0);
const firstEvenIndex = arr.findIndex(el => el % 2 === 0);

console.log(firstEven);
console.log(firstEvenIndex);


// some
const isEven = arr.some(el => el === 5);


// flat
const prices = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10]]];
const flatPrices = prices.flat(2);
console.log(flatPrices);

// flatMap
const flatMapPrices = prices.flatMap(el => el.concat(el)); // map then flat
console.log(flatMapPrices);

// sort
const names = ['John', 'Jane', 'Jack', 'Jill', 'Joe', 'Alex', 'Adam'];
console.log(names);
names.sort();
console.log(names);

const nums = [-100, -1, 0, 1, 20, 330, 30];
console.log(nums);
// nums.sort();
nums.sort((a, b) => a - b);
console.log(nums);

// arrays
const arr1 = [1, 2, 3];

const arr2 = new Array(5);
console.log(arr2.map(el => el * 2));
arr2.fill(1, 0, 2);
console.log(arr2); // [ 1, 1, <3 empty items> ]

const arr3 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr3); // [ 1, 2, 3, 4, 5 ]