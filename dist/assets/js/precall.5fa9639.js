console.log("Last modification time: 2/1/2021, 12:41:21 PM"),function(e){function t(t){for(var o,a,c=t[0],u=t[1],d=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);f.length;)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={3:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=u;r.push([21,0]),n()}({10:function(e,t,n){"use strict";Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,o=new Array(n);n--;)o[n]=[t[n],e[t[n]]];return o})},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a}));var o={"120p,120p_1":[160,120,15,65],"360p_4":[640,360,30,600],"480p_4":[640,480,30,750],"720p_3":[1280,720,30,1710]},i=1,r="7797cc53df1a49368d57dc75c1d69cb8",a="0067797cc53df1a49368d57dc75c1d69cb8IACVaAK9Q51g8xC5DD7xpQax0D+IApx5Tb5Ra/ZnycGUKRYw/4gAAAAAEABI+NBcMvMYYAEAAQAy8xhg"},21:function(e,t,n){"use strict";n.r(t);var o,i,r,a,c,u=n(4),d=n.n(u),s=(n(11),n(0)),l=n.n(s),f=(n(22),n(1)),v=(n(8),n(10),n(5)),p=n(2),m=(n(9),n(23),String(Number.parseInt((new Date).getTime(),10)+Math.floor(1e3*Math.random()))),h={DURATION:10,volume:0,volumeBar:l()("#volume"),targetStream:{},getVolume:function(e){var t=Math.round(100*e.getAudioLevel());return isNaN(t)?0:t},scheduleVolumeDetect:{},scheduleEnd:{},start:function(){var e=this;this.targetStream?(l()(".ag-connect-test").prepend('<div id="testDuration"></div>'),this.scheduleVolumeDetect=setInterval((function(){e.volume=e.getVolume(e.targetStream),e.volumeBar.val(e.volume)}),100),this.scheduleEnd=setTimeout((function(){l()("#testDuration").attr("style","animation-play-state:paused;background-color:#7ED321"),clearInterval(e.scheduleVolumeDetect),e.targetStream.getStats((function(t){var n,o=[t.videoReceiveBytes,t.audioReceiveBytes,t.videoReceivePackets,t.audioReceivePackets,t.videoReceivePacketsLost,t.audioReceivePacketsLost],i=o[1],r=o[2],a=o[3],c=o[4],u=o[5],d=(o[0]/1e3/e.DURATION).toFixed(2)+"KB/s",s=(i/1e3/e.DURATION).toFixed(2)+"KB/s",f=(c/r*100).toFixed(2)+"%",v=(u/a*100).toFixed(2)+"%",p=(c/r*100+u/a*100).toFixed(2),m=l()("#videoCard .ag-card-body"),h=l()("#audioCard .ag-card-body"),g='\n          <div class="ag-test-result">\n            <p>Video Bitrate: '.concat(d,"</p>\n            <p>Packet Loss: ").concat(f,"</p>\n          </div>\n        "),b='\n          <div class="ag-test-result">\n            <p>Audio Bitrate: '.concat(s,"</p>\n            <p>Packet Loss: ").concat(v,"</p>\n          </div>\n        ");n=p<1?"Excellent":p<5?"Good":p<10?"Poor":p<100?"Bad":"Get media failed.",m.find(".initial").hide(),m.find(".result").html(g),h.find(".initial").hide(),h.find(".result").html(b),l()("#testDuration").empty().after('<span style="">'.concat(n,"</span>"))})),l()("#stepTwo").addClass("active"),l()("#stepOne").removeClass("active")}),1e3*this.DURATION)):console.error("Please init Schedule with a targetStream!")},reset:function(){l()("#testDuration").remove(),this.volume=0,this.volumeBar.val(0),this.scheduleVolumeDetect&&clearInterval(this.scheduleVolumeDetect),this.scheduleEnd&&clearTimeout(this.scheduleEnd),this.targetStream=null},init:function(e,t){this.targetStream=e,this.DURATION=t}},g=function(){if(!o)throw Error("Stream not existed!");return new Promise((function(e,t){var n=o.getId();r.unpublish(o),o.stop(),o.close();var i={streamID:n,audio:!0,video:!0,screen:!1,cameraId:l()("#videoDevice").val(),microphoneId:l()("#audioDevice").val()};(o=d.a.createStream(i)).setVideoProfile(f.get("videoProfile").split(",")[0]||"480p_4"),o.init((function(){l()("#enableVideo").prop("checked")||o.disableVideo(),r.publish(o),e()}),(function(e){console.log("getUserMedia failed",e),t(e)}))}))};(document.querySelector(".ag-header-lead span").innerHTML="AgoraWeb v".concat("^2.5.2".slice(1)),new Promise((function(e,t){var n=p.b[f.get("videoProfile")],o=f.get("transcode")||"interop",i=function(){switch(o){case"":return"VP8-only";default:case"interop":return"VP8 &amp; H264";case"h264_interop":return"H264-only"}}(),r={videoProfile:"".concat(n[0],"x").concat(n[1]," ").concat(n[2],"fps ").concat(n[3],"kbps"),channel:f.get("channel")||"test",transcode:i,attendeeMode:f.get("attendeeMode")||"video",baseMode:f.get("baseMode")||"avc"};"avc"===r.baseMode&&(c=p.a),Object.entries(r).map((function(e){return l()("#"+e[0]).html(e[1])})),"video"===r.attendeeMode&&l()("#enableVideo").prop("checked",!0),d.a.checkSystemRequirements()?l()("#compatibility").html("AgoraRTC supported."):l()("#compatibility").html("AgoraRTC not fully supported and some functions may be lost."),Object(v.d)()?(l()("#audioDevice").parent().remove(),l()("#videoDevice").parent().remove(),e()):d.a.getDevices((function(t){var n="",o="";t.forEach((function(e){"audioinput"===e.kind&&(o+="<option value="+e.deviceId+">"+e.label+"</option>"),"videoinput"===e.kind&&(n+="<option value="+e.deviceId+">"+e.label+"</option>")})),l()("#videoDevice").html(n),l()("#audioDevice").html(o),e()}))}))).then((function(){l()("#quickJoinBtn").on("click",(function(){f.set("cameraId",l()("#videoDevice").val()),f.set("microphoneId",l()("#audioDevice").val());try{r&&r.unpublish(o),o&&o.close(),r&&r.leave((function(){console.log("Client succeed to leave.")}),(function(){console.log("Client failed to leave.")}))}finally{window.location.href="meeting.html"}})),l()("#videoDevice").change((function(e){h.reset(),g()})),l()("#audioDevice").change((function(e){h.reset(),g()})),l()("#enableVideo").change((function(e){l()("#enableVideo").prop("checked")?o.enableVideo():o.disableVideo()})),new Promise((function(e,t){(r=d.a.createClient({mode:f.get("transcode")||"interop"})).init(c,(function(){r.join(c,m,void 0,(function(n){var i={streamID:n,audio:!0,video:!0,screen:!1,cameraId:l()("#videoDevice").val(),microphoneId:l()("#audioDevice").val()};(o=d.a.createStream(i)).setVideoProfile(f.get("videoProfile").split(",")[0]||"480p_4"),o.init((function(){r.publish(o),l()("#enableVideo").prop("checked")||o.disableVideo(),e()}),(function(e){console.log("getUserMedia failed",e),t(e)}))}))}))})),new Promise((function(e,t){(a=d.a.createClient({mode:f.get("transcode")||"interop"})).on("stream-added",(function(e){var t=e.stream;a.subscribe(t,(function(e){console.log("Subscribe stream failed",e)}))})),a.on("stream-subscribed",(function(e){i&&i.stop(),h.reset(),i=e.stream,h.init(i,10),i.play("videoItem"),h.start()})),a.on("peer-leave",(function(e){l()("#videoItem").empty()})),a.on("stream-removed",(function(e){l()("#videoItem").empty()})),a.init(c,(function(){a.join(c,m,void 0,(function(t){e(t)}),(function(e){t(e)}))}))}))}))},23:function(e,t,n){},5:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=function(){return window.innerWidth<=800&&window.innerHeight<=830},r=function(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)},a=function(){return"undefined"!=typeof InstallTrigger}},8:function(e,t,n){},9:function(e,t,n){}});