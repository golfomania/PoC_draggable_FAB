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
      alert("supportLauncher found");
    }
  }, 1000);
})();
