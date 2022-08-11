// Arrow Functions / map

let arr = [1, 5, 8, 10, 20];

// com arrow function
const newArr = arr.map((item) => item * 2);
console.log(newArr);
//ou
arr = arr.map((item) => item * 2);
console.log(arr);

// com função tradicional
// arr.forEach(function (item, index) {
//   arr[index] = item * 2;
// });
