function readForm() {
  const lastNameElm = document.getElementById("lastName");
  const firstNameElm = document.getElementById("firstName");
  const outputElm = document.getElementById("output");
  outputElm.innerHTML = `<p>${lastNameElm.value}</p><p>${firstNameElm.value}</p>`;
}
