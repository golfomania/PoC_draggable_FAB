// ==UserScript==
// @name         BRZ365_freshwork_draggable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the floatiing action button draggable
// @author       Martin Löffler
// @match        https://*.brz365.eu/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=brz365.eu
// @grant        none
// @run-at       document-ready

// ==/UserScript==

(function () {
  "use strict";

  const interval = setInterval(function () {
    const supportLauncher = document.querySelector("iframe#launcher-frame");
    if (supportLauncher) {
      clearInterval(interval);
      addElements();
    }
  }, 1000);
})();

let offsetX;
let offsetY;

onDragStart = function (ev) {
  const rect = ev.target.getBoundingClientRect();

  offsetX = ev.clientX - rect.x;
  offsetY = ev.clientY - rect.y;
  //make element with the id "dropZone" visible
  document.getElementById("dropZone").style.visibility = "visible";
};

drop_handler = function (ev) {
  ev.preventDefault();

  const left = parseInt(id2.style.left);
  const top = parseInt(id2.style.top);

  id1.style.left = ev.clientX - left - offsetX + "px";
  id1.style.top = ev.clientY - top - offsetY + "px";
  id2.appendChild(document.getElementById("id1"));
  document.getElementById("id2").style.visibility = "hidden";
};

dragover_handler = function (ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};

function addElements() {
  // add Attributes to the FOB to make it draggable and visible after drop
  const supportLauncher = document.querySelector("iframe#launcher-frame");
  supportLauncher.setAttribute("draggable", "true");
  supportLauncher.setAttribute("ondragstart", "onDragStart(event)");
  supportLauncher.style.position = "absolute";

  // add a drop zone for the FOB to the DOM
  const dropZone = document.createElement("div");
  dropZone.setAttribute("id", "dropZone");
  dropZone.setAttribute("ondrop", "drop_handler(event)");
  dropZone.setAttribute("ondragover", "dragover_handler(event)");
  dropZone.style.width = "156px";
  dropZone.style.height = "56px";
  dropZone.style.position = "fixed";
  dropZone.style.bottom = "22px";
  dropZone.style.left = "22px";
  dropZone.style.border = "1px solid #64be3c";
  dropZone.style.cursor = "pointer";
  dropZone.style.visibility = "visible";
  document.body.appendChild(dropZone);
}
