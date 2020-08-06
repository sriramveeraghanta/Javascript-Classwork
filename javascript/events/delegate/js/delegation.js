document.addEventListener(
  "DOMContentLoaded",
  () => {
    let selectedItem = "";
    const listContainer = document.getElementById("listContainer");
    for (let i = 0; i <= 10; i++) {
      const listItem = document.createElement("li");
      listItem.setAttribute("id", `product_no_${i}`);
      listItem.innerHTML = `Product number: ${i}`;
      listItem.addEventListener("click", (event) => {
        selectedItem = event.target.innerHTML;
        const outputContainer = document.getElementById("output");
        outputContainer.innerHTML = `${selectedItem}
        (ID = ${event.target.getAttribute("id")})`;
      });
      listContainer.appendChild(listItem);
    }
  },
  false
);
