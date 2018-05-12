angular.module('video-player')
.service('youTube', function($window) {
  ///build the object that is returned by the service.
  // in this case the returnData key: with anom func that returns
  // sample data.
  this.returnData = function($http, key, query, max) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            part: 'snippet',
            key: key,
            q: query,
            maxResults: max,
            type: 'video',
            videoEmbeddable: 'true'
          }

      }).then(function (response) {
           console.log(response.data)
           this.videoData = response.data
         }, function (reason) {
           console.log(reason.data)
           this.error = reason.data
         })
  }
});
