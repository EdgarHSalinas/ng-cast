angular.module('video-player')
.component('videoPlayer', {
  binding: {
   videos: '<'
  },
  controller: function() {
    this.video = videos[0]
    this.videoSrc = `https://www.youtube.com/embed/${exampleVideoData[0].id.videoId}`
    this.title = exampleVideoData[0].snippet.title
    this.description = exampleVideoData[0].snippet.description
  },
  templateUrl: "src/templates/videoPlayer.html"
});
