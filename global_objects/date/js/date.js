"use strict";

// Reference ISO
// http://www.lingoes.net/en/translator/langcode.htm

const monthNames = [
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

function show(description, result) {
  document.writeln(
    "<tr><td>" + description + "</td><td>" + result + "</td></tr>"
  );
}

show("Todays date, automatically translated", new Date());
show("Number of ms elapsed since 01/01/1970 at 00:00:00", Date.now());
show("The current month's name", monthNames[new Date().getMonth()]);
show(
  "Localization in Arabic of today's date",
  new Date().toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

show(
  "Offset date of today in minutes with UTC",
  new Date().getTimezoneOffset()
);

show(
  "Mission Apollo11: Date of landing on the Moon July 20, 1969 at 20 h 17 min 40 s UTC",
  new Date("July 20, 1969 20:17:40 GMT+05:00")
);
