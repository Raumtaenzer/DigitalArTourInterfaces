var trackable_rhedaMarker07 = new RTTrackable("marker7");
var Schnittkerhaus = new RTVideo("assets/Schnittkerhaus.mp4",1,options_Schnittkerhaus,null,false,trackable_rhedaMarker07); 
Schnittkerhaus.addToCam();

var World = {
    switchContentToInfo: function() {
      
    Schnittkerhaus.removeFromCam();
    Schnittkerhaus.pause();
        
    },
    switchContentToAR: function() {
        
    Schnittkerhaus.addToCam();
    Schnittkerhaus.resume();
        
    },
    turnEverythingOff: function() {
        
    Schnittkerhaus.removeFromCam();
    Schnittkerhaus.pause();
        
    }
};