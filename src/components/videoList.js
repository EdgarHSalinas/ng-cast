angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
    //bind the app function
  },
  templateUrl: 'src/templates/videoList.html'
  
});
