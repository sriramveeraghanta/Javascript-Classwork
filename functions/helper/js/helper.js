"use strict";

const numbers = [45, 33, 9, 67, 22];
console.log("Numbers are", numbers);
console.log("Get First Number:", getFirst(numbers));
console.log("Get Last Number:", getLast(numbers));
console.log("Average is", getAverage(numbers));
console.log("Minimum is", getMinimum(numbers));
console.log("Maximum is", getMaximum(numbers));
console.log("Total is", getTotal(numbers));

function getFirst(list) {
  return list[0];
}

function getLast(list) {
  return list[list.length - 1];
}

function getAverage(list) {
  return (
    list.reduce((accumulator, currentValue) => accumulator + currentValue) /
    list.length
  );
}

function getMinimum(list) {
  return Math.min(...list);
}

function getMaximum(list) {
  return Math.max(...list);
}

function getTotal(list) {
  return list.reduce((acc, cv) => acc + cv);
}
