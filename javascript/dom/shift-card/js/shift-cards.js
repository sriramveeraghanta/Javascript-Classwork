function shiftLeft() {
  const cardsElm = document.getElementById("cards");
  if (cardsElm.children.length > 0) {
    const firstChild = cardsElm.children[0];
    cardsElm.children[0].remove();
    cardsElm.appendChild(firstChild);
  }
}

function shiftRight() {
  const cardsElm = document.getElementById("cards");
  cardsElm.insertBefore(cardsElm.lastChild, cardsElm.firstChild);
  //   console.log(cardsElm.children);
}
