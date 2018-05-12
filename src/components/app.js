angular.module('video-player')
.component('app', { //configuration object
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.getVideos = function(){
      console.log('service is running')
      return youTube.returnData() //when invoked should return sample data
    }
    this.getCurrentVideo = function(video) {
        this.video = video
    }.bind(this);

//saves the collection then make a current video off it.
  }
})
