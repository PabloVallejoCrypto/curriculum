"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{4890:function(r,t,o){function n(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}o.d(t,{MT:function(){return u}});var e="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function u(r,t,o){if("function"==typeof t&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw Error(n(0));if("function"==typeof t&&void 0===o&&(o=t,t=void 0),void 0!==o){if("function"!=typeof o)throw Error(n(1));return o(u)(r,t)}if("function"!=typeof r)throw Error(n(2));var f,c=r,s=t,p=[],l=p,h=!1;function E(){l===p&&(l=p.slice())}function y(){if(h)throw Error(n(3));return s}function b(r){if("function"!=typeof r)throw Error(n(4));if(h)throw Error(n(5));var t=!0;return E(),l.push(r),function(){if(t){if(h)throw Error(n(6));t=!1,E();var o=l.indexOf(r);l.splice(o,1),p=null}}}function a(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(r))throw Error(n(7));if(void 0===r.type)throw Error(n(8));if(h)throw Error(n(9));try{h=!0,s=c(s,r)}finally{h=!1}for(var t=p=l,o=0;o<t.length;o++)(0,t[o])();return r}return a({type:i.INIT}),(f={dispatch:a,subscribe:b,getState:y,replaceReducer:function(r){if("function"!=typeof r)throw Error(n(10));c=r,a({type:i.REPLACE})}})[e]=function(){var r;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw Error(n(11));function t(){r.next&&r.next(y())}return t(),{unsubscribe:b(t)}}})[e]=function(){return this},r},f}}}]);