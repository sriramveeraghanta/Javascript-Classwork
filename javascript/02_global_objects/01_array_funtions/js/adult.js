"use strict";

// Age to be considered an adult
const MAJOR = 18;

// Four groups of ages
const AGES = [[25, 39, 51, 22, 15, 44], [25, 39, 51, 22, 55, 44], [25], [15]];
let counter = 0;

AGES.forEach(function (ages, index) {
  const filteredAges = ages.filter((element) => element > MAJOR);
  if (filteredAges.length === ages.length) {
    document.writeln(
      `<tr><td> Group ${counter}</td><td> are all Adults </td></tr>`
    );
  } else {
    document.writeln(
      `<tr><td> Group ${counter}</td><td> are not all Adults </td></tr>`
    );
  }
  counter += 1;
});
