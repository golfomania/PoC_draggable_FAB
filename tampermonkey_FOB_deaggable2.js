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
      supportLauncher.style.position = "absolute";

      //Make the FOB element draggagle:
      dragElement(document.getElementById("launcher-frame"));

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }
  }, 1000);
})();
