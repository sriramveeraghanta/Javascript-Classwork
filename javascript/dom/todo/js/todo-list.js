function addNewLiElement() {
  const textBoxElm = document.getElementById("textBox");
  const listElm = document.getElementById("list");
  if (textBoxElm.value !== "") {
    listElm.innerHTML += `<li>${textBoxElm.value}</li>`;
    textBoxElm.value = "";
  }
}

function deleteLastLiElement() {
  const listElm = document.getElementById("list");
  if (listElm.childNodes.length > 0) {
    listElm.removeChild(listElm.childNodes[listElm.childNodes.length - 1]);
  }
}
