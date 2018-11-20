// ==UserScript==
// @name            LFoG v. 0.2
// @namespace       LFoG

// @description     This is a farming bot for the browser game Grepolis

// @autor           Fonduee aka FewG
// @git repository  http://git.schepsen.eu/js-luxury-farmer-of-grepolis

// @verison         0.2
// @include         http://de*.grepolis.com/game/*
// ==/UserScript==

var js = document.createElement("script");

js.src = "http://schepsen.eu/grepolis/LFoG.js";
js.type = "text/javascript";

document.getElementsByTagName("head")[0].appendChild(js);