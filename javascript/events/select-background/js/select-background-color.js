const colorSelectElm = document.getElementById("colorSelect");
colorSelectElm.addEventListener("change", (event) => {
  const colorValue = event.target.value;
  document.body.style.backgroundColor = colorValue;
});
