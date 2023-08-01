// add draggable="true" to the element which shall become draggable
console.log("script.js loaded");

const FOB = document.querySelector(".box");
FOB.setAttribute("draggable", "true");
FOB.setAttribute("ondragstart", "onDragStart(event)");

let offsetX;
let offsetY;

onDragStart = function (ev) {
  const rect = ev.target.getBoundingClientRect();

  offsetX = ev.clientX - rect.x;
  offsetY = ev.clientY - rect.y;
};

drop_handler = function (ev) {
  ev.preventDefault();

  const left = parseInt(id2.style.left);
  const top = parseInt(id2.style.top);

  id1.style.position = "absolute";
  id1.style.left = ev.clientX - left - offsetX + "px";
  id1.style.top = ev.clientY - top - offsetY + "px";
  id2.appendChild(document.getElementById("id1"));
};

dragover_handler = function (ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};
