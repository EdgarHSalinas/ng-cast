angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function() {
    this.videos = exampleVideoData;
    this.onClick = function () {
      console.log('rastar')
    }
  },
  templateUrl: 'src/templates/videoList.html'
  
});
