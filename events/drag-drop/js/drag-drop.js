window.addEventListener("DOMContentLoaded", () => {
  const dragItems = document.getElementsByClassName("item");
  for (let i = 0; i < dragItems.length; i++) {
    if (dragItems[i].getAttribute("draggable") === "true") {
      dragItems[i].setAttribute("id", `drag_item_${i}`);
      dragItems[i].addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("application/my-app", `drag_item_${i}`);
        event.dataTransfer.dropEffect = "move";
      });
    }
  }

  const dropArea = document.getElementById("dropArea");
  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    const elemId = event.dataTransfer.getData("application/my-app");
    event.target.appendChild(document.getElementById(elemId));
  });
});
