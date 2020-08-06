"use strict";

function createItem(item) {
  return `<li>${item}</li>`;
}

function createList(list) {
  let returnString = "<ul>";
  for (let i = 0; i < list.length; i++) {
    returnString += `<li>${list[i]}</li>`;
  }
  returnString += "</ul>";
  return returnString;
}
