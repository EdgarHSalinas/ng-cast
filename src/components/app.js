angular.module('video-player')
.component('app', { //configuration object
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = exampleVideoData;
  }
})
