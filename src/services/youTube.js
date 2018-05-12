angular.module('video-player')
.service('youTube', function($http) {
  this.getYouTubeData = function(key, query, max, cb) {
    $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            part: 'snippet',
            key: key,
            q: query,
            maxResults: max,
            type: 'video',
            videoEmbeddable: 'true'
          }
      }).then(function (response) {
                  cb(response)
                 }, function (reason) {
                   this.error = reason.data
                 }
              )
   }
});
