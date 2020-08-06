const englishWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const frenchWeek = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const dayNumberElm = document.getElementById("dayNumber");
const languageElm = document.getElementById("language");
const labelElm = document.getElementsByTagName("label");

dayNumberElm.addEventListener("change", (event) => {
  const index = event.target.value;
  if (languageElm.checked) {
    labelElm[1].innerHTML = englishWeek[index];
  } else {
    labelElm[1].innerHTML = frenchWeek[index];
  }
});
