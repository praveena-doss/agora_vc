console.log("Last modification time: 2/1/2021, 2:22:21 PM"),function(n){function e(e){for(var r,i,u=e[0],f=e[1],l=e[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(a&&a(e);d.length;)d.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],r=!0,u=1;u<t.length;u++){var f=t[u];0!==o[f]&&(r=!1)}r&&(c.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={4:0},c=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var a=f;c.push([24,0]),t()}({1:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return c})),t.d(e,"d",(function(){return i}));var r={"120p,120p_1":[160,120,15,65],"360p_4":[640,360,30,600],"480p_4":[640,480,30,750],"720p_3":[1280,720,30,1710]},o=1,c="7797cc53df1a49368d57dc75c1d69cb8",i="0067797cc53df1a49368d57dc75c1d69cb8IAASkkSuRgo+1fIa9sHeASxmmfGMCuKvQsY9AfqBE6cDaDLRTXgAAAAAEABI+NBchRIZYAEAAQCEEhlg"},24:function(n,e,t){"use strict";t.r(e);var r=t(4),o=t.n(r),c=t(1),i=o.a.createClient({mode:"live",codec:"h264"});$("#join-btn").on("click",(function(){i.init(c.a,(function(){console.log("AgoraRTC client initialized")}),(function(n){console.log("AgoraRTC client init failed",n)}))}))}});