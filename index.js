// 1. Function to calculate the difference between two arguments

function calculateDifference(a, b) {
  return a - b;
}
console.log("Difference:", calculateDifference(1151115, 1151114));

// 2. Function to check if a number is odd

function isOdd(number) {
  return number % 2 !== 0;
}
console.log("Is 7 Odd?:", isOdd(7));
console.log("Is 4 Odd?:", isOdd(4));

// 3. Function to find the minimum number in an array

function findMin(arr) {
  return Math.min(...arr);
}
console.log("Minimum value:", findMin([10, 3, 25, -5, 0]));

// 4. Function to filter even numbers from an array

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 5. Function to sort an array in descending order

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}
console.log("Sorted Descending:", sortArrayDescending([10, 3, 25, -5, 0]));

// 6. Function to lowercase the first letter of a string

function lowercaseFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercase First Letter:", lowercaseFirstLetter("HelloWorld"));

// 7. Function to calculate the average of numbers in an array

function findAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40, 50]));

// 8. Function to check if a year is a leap year

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Is 2024 a Leap Year?:", isLeapYear(2024));
console.log("Is 2023 a Leap Year?:", isLeapYear(2023));
