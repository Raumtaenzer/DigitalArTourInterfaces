var trackable_rhedaMarker02 = new RTTrackable("marker19");


var video = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker02);

video.addToCam();

var World = {
    switchContentToInfo: function() {
      video.removeFromCam();
      video.pause();
    },
    switchContentToAR: function() {
      video.addToCam();
      video.resume();
    },
    turnEverythingOff: function() { 
      video.removeFromCam();
      video.pause();
        
    }
};