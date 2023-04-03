// ==UserScript==
// @name         Auto Scroll to Bottom
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Automatically scrolls to the bottom of the page continuously
// @author       Syafa Hadyan
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Time interval between each scroll (in milliseconds)
    const SCROLL_INTERVAL = 500;

    // Start scrolling to the bottom
    setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, SCROLL_INTERVAL);
})();
