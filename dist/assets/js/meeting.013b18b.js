console.log("Last modification time: 2/1/2021, 2:22:21 PM"),function(e){function t(t){for(var i,a,c=t[0],s=t[1],d=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(l&&l(t);f.length;)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={2:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;r.push([17,0]),n()}([,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a}));var i={"120p,120p_1":[160,120,15,65],"360p_4":[640,360,30,600],"480p_4":[640,480,30,750],"720p_3":[1280,720,30,1710]},o=1,r="7797cc53df1a49368d57dc75c1d69cb8",a="0067797cc53df1a49368d57dc75c1d69cb8IAASkkSuRgo+1fIa9sHeASxmmfGMCuKvQsY9AfqBE6cDaDLRTXgAAAAAEABI+NBchRIZYAEAAQCEEhlg"},,function(e,t,n){"use strict";var i,o=n(0),r=n.n(o),a=(i=function(e,t){e instanceof Array?e.map((function(e){return t(e)})):t(e)},{hide:function(e){i(e,(function(e){r()(e).hide()}))},show:function(e){i(e,(function(e){r()(e).show()}))},toggle:function(e){i(e,(function(e){r()(e).toggle()}))},enable:function(e){i(e,(function(e){r()(e).removeClass("disabled")}))},disable:function(e){i(e,(function(e){r()(e).addClass("disabled")}))}});t.a=a},,function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var i=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=function(){return window.innerWidth<=800&&window.innerHeight<=830},r=function(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)},a=function(){return"undefined"!=typeof InstallTrigger}},function(e,t,n){"use strict";n(20);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}t.a={init:function(e,t,n){this.MAX_RATIO=n,this.MIN_RATIO=t,this.canvas=document.querySelector("#".concat(e))},_checkRatio:function(e,t){var n=t/e;return!(n>this.MAX_RATIO||n<this.MIN_RATIO)},customRender:function(e,t,n){this.canvas.classList.remove("container__flex"),this.canvas.classList.add("container__grid");var i=e.length;n=n||e[e.length-1]&&e[e.length-1].getId(),i>4&&1===t||i>8?(t=0,console.log("Automatically switch to tile mode..."),this.rendererFactory(e,t,n)):this.rendererFactory(e,t,n)},rendererFactory:function(e,t,n){if(0===t)this.tileRenderer(e);else if(1===t)this.pipRenderer(e,n);else{if(2!==t)throw Error("Wrong mode for renderer");this.sharingRenderer(e,n)}},updateVideoItem:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getId(),o=document.querySelector("#video-item-"+i);if(!o){o=document.createElement("section");var r=document.createElement("div");o.setAttribute("id","video-item-"+i),o.setAttribute("class","video-item"),r.setAttribute("class","video-item-box"),o.appendChild(r),this.canvas.appendChild(o),e.play("video-item-"+i)}n?o.classList.add("window__fit"):o.classList.remove("window__fit"),o.setAttribute("style",t)},enterFullScreen:function(){this.canvas.classList.add("fullscreen")},exitFullScreen:function(){this.canvas.classList.remove("fullscreen")},tileRenderer:function(e){var t=function(e){for(var t,n,i,o,r,a=e.width,c=e.height,s=e.minRatio,d=e.maxRatio,l=e.count,u=1;u<=l;u++){var f=u,h=Math.ceil(l/u);n=Math.floor((a-5)/h);var m=(i=Math.floor((c-5)/f))/n;m>d?i=(m=d)*n:m<s&&(n=i/(m=s));var p=n*i*l;(void 0===t||p>t)&&(t=p,r=i,o=n)}return{height:r,width:o}}({width:this.canvas.clientWidth,height:this.canvas.clientHeight,minRatio:this.MIN_RATIO,maxRatio:this.MAX_RATIO,count:e.length}),n=t.width,i=t.height;this.canvas.classList.remove("container__grid"),this.canvas.classList.add("container__flex");var r,a=o(e);try{for(a.s();!(r=a.n()).done;){var c=r.value;this.updateVideoItem(c,"width: ".concat(n,"px; height: ").concat(i,"px;"))}}catch(e){a.e(e)}finally{a.f()}},pipRenderer:function(e,t){var n=e.length;if(n>4)throw Error("PIP mode only suitable for less than 4 stream");if(!this._checkRatio(4*this.canvas.clientWidth/24,3*this.canvas.clientHeight/12)||!this._checkRatio(12*this.canvas.clientWidth/24,12*this.canvas.clientHeight/12))return this.tileRenderer(e);for(var i=0,o=0;i<n;i++){var r=e[i];r.getId()===t?this.updateVideoItem(r,"grid-area: span 12/span 24/13/25"):(this.updateVideoItem(r,"grid-area: span 3/span 4/".concat(4+3*o,"/25;\n                    z-index:1;width:calc(100% - 20px);height:calc(100% - 20px)")),o++)}},sharingRenderer:function(e,t){var n=e.length;if(n>8)throw Error("Screen Sharing Mode only suitable for less than 8 stream");if(!this._checkRatio(4*this.canvas.clientWidth/24,4*this.canvas.clientHeight/12)&&1!==e.length){var r=e.findIndex((function(e){return e.getId()===t}));if(-1===r)throw Error("Cannot find stream by given mainId!");for(var a=0;a<n;a++)a!==r&&this.updateVideoItem(e[a],"display: none");return this.sharingRenderer([e[r]],t)}var c=i(e);if(8===n){var s=c.findIndex((function(e){return e.hasAudio()&&!e.hasVideo()}));-1===s&&(s=7);var d=c[s];this.updateVideoItem(d,"display: none"),c.splice(s,1)}var l,u=o(c);try{for(u.s();!(l=u.n()).done;){var f=l.value;f.getId()===t?1===n?this.updateVideoItem(f,"grid-area: span 12/span 24/13/25;",!0):n<5?this.updateVideoItem(f,"grid-area: span 12/span 20/13/25;",!0):this.updateVideoItem(f,"grid-area: span 12/span 16/13/21;",!0):this.updateVideoItem(f,"grid-area: span 4/span 4")}}catch(e){u.e(e)}finally{u.f()}}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var i=function(e,t,n){console.log("%c ".concat(e,": ").concat(n),"color: ".concat(t))},o={init:function(e,t){return function(n){return i(e,t,n)}}}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]];return i})},,,function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=function(){var e=o()(".notification-container");e.length||(o()("body").append('<div class="notification-container" \n                    style="z-index: 12;position: absolute;\n                    width: 38.2%;max-width: 450px; \n                    min-width: 300px;left: 0;\n                    word-break:break-all;\n                    bottom: 0;"></div>'),e=o()(".notification-container"));var t=function(t,n,i){var r=(new Date).getTime(),a='<div id="notify-'.concat(r,'" class="notification is-').concat(t,'">\n                                <button class="delete"></button>\n                                ').concat(n,"\n                            </div>");e.append(a),o()("#notify-"+r+" .delete").on("click",(function(){o()("#notify-"+r).remove()})),setTimeout((function(){o()("#notify-"+r).remove()}),i)};return{primary:function(e,n){t("primary",e,n)},link:function(e,n){t("link",e,n)},info:function(e,n){t("info",e,n)},success:function(e,n){t("success",e,n)},warning:function(e,n){t("warning",e,n)},danger:function(e,n){t("danger",e,n)}}}();t.a=r},,,,function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),i=n.n(t),o=(n(11),n(0)),r=n.n(o),a=n(2),c=n(12),s=(n(8),n(9),n(19),n(3)),d=n(5),l=n(13),u=n(6),f=n(1),h=n(7);n(10);function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v,g,b={},y={},w={},S=[],I=null,M=null,A=h.b.init("global","blue"),R=h.b.init("share","yellow"),k=h.b.init("local","green"),O=function(e,t){return new Promise((function(n,i){e.init(t.key,(function(){A("AgoraRTC client initialized");var o=f.b[t.videoProfileLow];e.join(t.token,t.channel,t.uid,(function(t){Object(h.a)(t,"brown","User ".concat(t," join channel successfully")),Object(h.a)(t,"brown",(new Date).toLocaleTimeString()),e.setLowStreamParameter({width:o[0],height:o[1],framerate:o[2],bitrate:o[3]}),n(t)}),(function(e){i(e)}))}))}))},_=function(e,t,n){var o={streamID:e,audio:!0,video:!0,screen:!1};switch(t.attendeeMode){case"audio-only":o.video=!1;break;case"audience":o.video=!1,o.audio=!1;break;default:case"video":}var r=i.a.createStream(Object(c.merge)(o,n));return r.setVideoProfile(t.videoProfile),r},B=function(){try{I&&I.unpublish(M),M&&M.close(),I&&I.leave((function(){R("Share client succeed to leave.")}),(function(){R("Share client failed to leave.")}))}finally{I=null,M=null}};window.installSuccess=function(){A.apply(void 0,arguments)},window.installError=function(){A.apply(void 0,arguments),l.a.danger("Failed to install the extension, please check the network and console.",3e3)};var T=function(e){S.map((function(t,n){return t.getId()===e?(S[n].close(),r()("#video-item-"+e).remove(),S.splice(n,1),1):0})),S.length<=4&&2!==b.displayMode&&s.a.enable(".displayModeBtn"),u.a.customRender(S,b.displayMode,v)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getId(),i=S.some((function(e){return e.getId()===n}));i||(t?S.push(e):S.unshift(e),S.length>4&&(b.displayMode=1===b.displayMode?0:b.displayMode,s.a.disable([".displayModeBtn",".disableRemoteBtn"])),u.a.customRender(S,b.displayMode,v))},x=function(e){return S.filter((function(t){return t.getId()===e}))[0]},C=function(e,t){if(e!==t){var n,i,o,r=m(S);try{for(r.s();!(o=r.n()).done;){var a=o.value,c=a.getId();c===e?n=a:c===t&&(i=a)}}catch(e){r.e(e)}finally{r.f()}n&&y.setRemoteVideoStreamType(n,1),i&&y.setRemoteVideoStreamType(i,0)}};(function(e){switch(document.querySelector(".ag-header-lead span").innerHTML="AgoraWeb v".concat("^2.5.2".slice(1)),u.a.init("ag-canvas",9/16,1.6),Object(d.c)()&&u.a.enterFullScreen(),Object(d.b)()||Object(d.a)()||s.a.disable(".shareScreenBtn"),r()("#room-name").html(e.channel),e.attendeeMode){case"audio-only":s.a.hide([".videoControlBtn",".shareScreenBtn"]);break;case"audience":s.a.hide([".videoControlBtn",".audioControlBtn",".shareScreenBtn"]);break;default:case"video":}})(b=function(){var e={videoProfile:a.get("videoProfile").split(",")[0]||"480p_4",videoProfileLow:a.get("videoProfileLow"),cameraId:a.get("cameraId"),microphoneId:a.get("microphoneId"),channel:a.get("channel")||"test",transcode:a.get("transcode")||"interop",attendeeMode:a.get("attendeeMode")||"video",baseMode:a.get("baseMode")||"avc",displayMode:1,uid:void 0,resolution:void 0},t=f.b[a.get("videoProfile")];return e.resolution=t[0]/t[1]||4/3,e.key=f.a,e.token=f.d,e}()),y=i.a.createClient({mode:b.transcode}),r()(".displayModeBtn").on("click",(function(e){e.currentTarget.classList.contains("disabled")||S.length<=1||(1===b.displayMode?(b.displayMode=0,s.a.disable(".disableRemoteBtn")):0===b.displayMode&&(b.displayMode=1,s.a.enable(".disableRemoteBtn")),u.a.customRender(S,b.displayMode,v))})),r()(".exitBtn").on("click",(function(){try{I&&B(),y&&y.unpublish(w),w&&w.close(),y&&y.leave((function(){k("Client succeed to leave.")}),(function(){k("Client failed to leave.")}))}finally{window.location.href="index.html"}})),r()(".videoControlBtn").on("click",(function(){r()(".videoControlBtn").toggleClass("off"),w.isVideoOn()?w.disableVideo():w.enableVideo()})),r()(".audioControlBtn").on("click",(function(){r()(".audioControlBtn").toggleClass("off"),w.isAudioOn()?w.disableAudio():w.enableAudio()})),r()(".shareScreenBtn").on("click",(function(e){e.currentTarget.classList.contains("disabled")||(I?B():function(){s.a.disable(".shareScreenBtn"),I=i.a.createClient({mode:b.transcode});var e=Object(c.merge)(b,{uid:f.c});O(I,e).then((function(t){(M=_(t,e,{screen:!0,video:!1,audio:!1,extensionId:"minllpmhdgpndnkomcoccfekfegnlikg",mediaSource:"application"})).init((function(){s.a.enable(".shareScreenBtn"),M.on("stopScreenSharing",(function(){B(),R("Stop Screen Sharing at"+new Date)})),I.publish(M,(function(e){R("Publish share stream error: "+e),R("getUserMedia failed",e)}))}),(function(e){s.a.enable(".shareScreenBtn"),R("getUserMedia failed",e),B(),Object(d.a)()&&l.a.danger('\n            Please install chrome extension from \n            <a href="https://chrome.google.com/webstore/detail/minllpmhdgpndnkomcoccfekfegnlikg">Google Webstore</a> \n            before using sharing screen.   \n          ',5e3)}))}))}())})),r()(".disableRemoteBtn").on("click",(function(e){if(!(e.currentTarget.classList.contains("disabled")||S.length<=1)){r()(".disableRemoteBtn").toggleClass("off");var t=w.getId();Array.from(document.querySelectorAll(".video-item:not(#video-item-".concat(t,")"))).map((function(e){return"none"===e.style.display?(e.style.display="block",1):(e.style.display="none",0)}))}})),r()(window).resize((function(e){Object(d.c)()?u.a.enterFullScreen():u.a.exitFullScreen(),u.a.customRender(S,b.displayMode,v)})),r()(".ag-container").dblclick((function(e){for(var t=e.target;!t.classList.contains("video-item");)if((t=t.parentNode).classList.contains("ag-main"))return;var n=parseInt(t.id.split("-")[2],10);if(n!==v){var i=2===b.displayMode?f.c:n;C(v,i),g=x(v=i)}u.a.customRender(S,b.displayMode,v)})),r()(document).mousemove((function(t){e._toolbarToggle&&clearTimeout(e._toolbarToggle),r()(".ag-btn-group").addClass("active"),e._toolbarToggle=setTimeout((function(){r()(".ag-btn-group").removeClass("active")}),2500)})),y.on("stream-added",(function(e){var t=e.stream,n=t.getId();k("New stream added: "+n),k((new Date).toLocaleTimeString()),k("Subscribe ",t),n===f.c&&(b.displayMode=2,v=n,g=t,I||s.a.disable(".shareScreenBtn"),s.a.disable([".displayModeBtn",".disableRemoteBtn"])),n!==v&&(2===b.displayMode?y.setRemoteVideoStreamType(t,1):(g&&y.setRemoteVideoStreamType(g,1),g=t,v=n)),y.subscribe(t,(function(e){k("Subscribe stream failed",e)}))})),y.on("peer-leave",(function(e){var t=e.uid;if(k("Peer has left: "+t),k((new Date).toLocaleTimeString()),t===f.c&&(b.displayMode=0,"video"===b.attendeeMode&&s.a.enable(".shareScreenBtn"),s.a.enable([".displayModeBtn",".disableRemoteBtn"]),B()),t===v){var n=2===b.displayMode?f.c:w.getId();C(v,n),g=x(v=n)}T(e.uid)})),y.on("stream-subscribed",(function(e){var t=e.stream;k("Got stream-subscribed event"),k((new Date).toLocaleTimeString()),k("Subscribe remote stream successfully: "+t.getId()),j(t)})),y.on("stream-removed",(function(e){var t=e.stream,n=t.getId();if(k("Stream removed: "+n),k((new Date).toLocaleTimeString()),n===f.c&&(b.displayMode=0,"video"===b.attendeeMode&&s.a.enable(".shareScreenBtn"),s.a.enable([".displayModeBtn",".disableRemoteBtn"]),B()),n===v){var i=2===b.displayMode?f.c:w.getId();C(v,i),g=x(v=i)}T(t.getId())})),O(y,b).then((function(e){var t=Object(d.d)()?{}:{cameraId:b.cameraId,microphoneId:b.microphoneId};w=_(e,b,t),"audience"!==b.attendeeMode&&(v=e,g=w),y.enableDualStream((function(){k("Enable dual stream success!")}),(function(e){k(e)})),w.init((function(){"audience"!==b.attendeeMode&&(j(w,!0),y.publish(w,(function(e){k("Publish local stream error: "+e)})))}),(function(e){k("getUserMedia failed",e)}))}))}.call(this,n(14))},,function(e,t,n){},function(e,t,n){}]);