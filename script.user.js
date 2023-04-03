// ==UserScript==
// @name         Auto Scroll to Bottom
// @namespace    https://github.com/SyafaHadyan/tampermonkey-auto-scroll.git
// @version      1.2.0
// @description  Automatically scrolls to the bottom of the page continuously
// @author       Syafa Hadyan
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const SCROLL_INTERVAL = 250;

    setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, SCROLL_INTERVAL);
})();
