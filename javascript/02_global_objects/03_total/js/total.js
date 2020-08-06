"use strict";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SALES = [120, 500, 350, 400, 600, 890, 450, 100, 250, 300, 650, 450];

let total = SALES.reduce((acc, value) => acc + value);

// Creation of a vertical HTML table
document.write("<h2>Vertical Table</h2>");

document.write("<table>");
for (let i = 0; i < SALES.length && i < MONTHS.length; i++) {
  document.write(`<tr><td>${MONTHS[i]}</td><td>${SALES[i]}</td></tr>`);
}
document.write(
  `<tr><td><strong>Total</strong></td><td> <strong>${total} $</strong></td></tr>`
);

document.write("</table>");

document.write("<h2>Horizontal Table</h2>");

document.write("<table><tr>");
for (let i = 0; i < MONTHS.length; i++) {
  document.write(`<td>${MONTHS[i]}</td>`);
}
document.write(`<td><strong>Total</strong></td></tr><tr>`);
for (let i = 0; i < SALES.length; i++) {
  document.write(`<td>${SALES[i]}</td>`);
}
document.write(`<td><strong>${total} $</strong></td>`);
document.write(`</tr></table>`);
