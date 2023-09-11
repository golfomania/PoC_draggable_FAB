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
      supportLauncher.addEventListener("mouseover", function () {
        //add a button on the left side of the supportLauncher element  with an eventlistener when the button is clicked
        const button = document.createElement("button");
        button.innerHTML = "Click me";
        button.style.position = "relative";
        button.addEventListener("click", function () {
          alert("You clicked me");
        });
        //append the button to the partent element of the supportLauncher
        supportLauncher.appendChild(button);
      });
    }
  }, 1000);
})();
