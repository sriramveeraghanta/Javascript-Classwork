function createWithInnerHTML() {
  let elementTypeElem = document.getElementById("elementType");
  let elementType =
    elementTypeElem.options[elementTypeElem.selectedIndex].value;
  let elementText = document.getElementById("elementContent").value;
  //   console.log(elementType, elementText);
  let outputElem = document.getElementById("output");
  outputElem.innerHTML += `<${elementType} class="inner-html">${elementText}</${elementType}>`;
}

function createWithCreateElement() {
  let elementTypeElem = document.getElementById("elementType");
  let elementType =
    elementTypeElem.options[elementTypeElem.selectedIndex].value;
  let elementText = document.getElementById("elementContent").value;
  let outputElem = document.getElementById("output");
  let newElem = document.createElement(elementType);
  newElem.classList.add("create-element");
  newElem.innerHTML = elementText;
  outputElem.appendChild(newElem);
}
