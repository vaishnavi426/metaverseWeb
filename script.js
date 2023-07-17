$(document).on("click",".containerVolume",function(e){
    if(isMuted){
        $('video').prop('muted', false);
    }
    else{
        $('video').prop('muted',true);
    }
});

var videos = document.querySelectorAll('video');
  if (location.search === '?enabled=false') 
  {
  } else if (location.search === '?enabled=true') {
       enableVideos(false);
  } else {
     enableVideos();
  }
  function enableVideos(everywhere) {
      for (var i = 0; i < videos.length; i++) {
         window.makeVideoPlayableInline(videos[i], !videos[i].hasAttribute('muted'), !everywhere);
      }
  }