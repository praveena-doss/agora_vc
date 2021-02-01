import AgoraRTC from "agora-rtc-sdk";

import { APP_ID } from "../../utils/Settings";

var client = AgoraRTC.createClient({mode: 'live', codec: "h264"});

$("#join-btn").on("click", function(){
    client.init(APP_ID, function () {
        console.log("AgoraRTC client initialized");
      }, function (err) {
        console.log("AgoraRTC client init failed", err);
      });
})