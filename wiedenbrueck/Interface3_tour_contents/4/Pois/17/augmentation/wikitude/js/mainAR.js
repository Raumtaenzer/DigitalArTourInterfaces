var trackable_rhedaMarker17 = new RTTrackable("marker17");
var trackable_rhedaMarker17_2 = new RTTrackable("marker17_2");
var audioaroff = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker17);
var audioARon = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker17);
var audioaroff_2 = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker17_2);
var audioARon_2 = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker17_2);
var sound = new AR.Sound("assets/audio.mp3");
sound.load();
audioaroff.onClickAdditions=function(){
    sound.play();
    audioARon.addToCam();
    audioaroff.removeFromCam();
    audioARon_2.addToCam();
    audioaroff_2.removeFromCam();
}
audioARon.onClickAdditions=function(){
    sound.pause();
    audioaroff.addToCam();
    audioARon.removeFromCam();
    audioaroff_2.addToCam();
    audioARon_2.removeFromCam();
};
audioaroff_2.onClickAdditions=function(){
    sound.play();
    audioARon.addToCam();
    audioaroff.removeFromCam();
    audioARon_2.addToCam();
    audioaroff_2.removeFromCam();
};
audioARon_2.onClickAdditions=function(){
    sound.pause();
    audioaroff.addToCam();
    audioARon.removeFromCam();
    audioaroff_2.addToCam();
    audioARon_2.removeFromCam();
};

sound.onFinishedPlaying=function(){
    audioaroff.addToCam();
    audioARon.removeFromCam();
    audioaroff_2.addToCam();
    audioARon_2.removeFromCam();
}

audioaroff.addToCam();
audioaroff_2.addToCam();

var World = {
    switchContentToInfo: function() {
      sound.pause();
      audioARon.removeFromCam();
      audioaroff.removeFromCam();

      //document.getElementById("clara").style.visibility = "visible";
      document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
      audioaroff.addToCam();
      //document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() {
      sound.pause();
      audioARon.removeFromCam();
      audioaroff.removeFromCam();

      //document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
        
    }
};