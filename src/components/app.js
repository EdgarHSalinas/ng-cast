angular.module('video-player')
.component('app', { //configuration object
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videoCollection, this.video;
    youTube.getYouTubeData(window.YOUTUBE_API_KEY, '', 10, (response) => { this.videoCollection = response.data.items; } )
    // this.getCurrentVideo = function(video) {
    //     this.video = video
    // }.bind(this);
    this.getCurrentVideo = (video) => this.video = video;
    this.search = (query) => youTube.getYouTubeData(window.YOUTUBE_API_KEY, query, 10, (response) => { this.videoCollection = response.data.items; } )

  }
})
