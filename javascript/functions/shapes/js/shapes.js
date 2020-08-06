"use strict";

let size = 7;
drawA(size);
drawB(size);
drawC(size);
drawD(size);
drawE(size);

size = 8;
drawNumberA(size);
drawNumberB(size);
drawNumberC(size);
drawNumberD(size);

function drawA(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        printString += "#";
      } else {
        printString += " ";
      }
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawB(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (j === i || i === 0 || i === size - 1) {
        printString += "#";
      } else {
        printString += " ";
      }
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawC(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || j === size - i - 1 || i === size - 1) {
        printString += "#";
      } else {
        printString += " ";
      }
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawD(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || j === size - i - 1 || i === size - 1 || j === i) {
        printString += "#";
      } else {
        printString += " ";
      }
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawE(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        i === 0 ||
        i === size - 1 ||
        j === size - i - 1 ||
        j === i ||
        j === 0 ||
        j === size - 1
      ) {
        printString += "#";
      } else {
        printString += " ";
      }
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawNumberA(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i + 1; j++) {
      printString += j + 1;
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawNumberB(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = size; j > i; j--) {
      printString += size - j + 1;
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawNumberC(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i + 1; j++) {
      printString += size - j;
    }
    printString += "\n";
  }
  console.log(printString);
}

function drawNumberD(size) {
  let printString = "";
  for (let i = 0; i < size; i++) {
    for (let j = size; j > i; j--) {
      printString += j;
    }
    printString += "\n";
  }
  console.log(printString);
}
