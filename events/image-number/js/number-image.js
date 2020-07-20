const numberInputElm = document.getElementById("numberInput");
const numberDivElm = document.getElementById("numberDiv");
numberInputElm.addEventListener("change", (event) => {
  const imageNumber = event.target.value;
  numberDivElm.children[0].src = `image/${imageNumber}.jpg`;
});
