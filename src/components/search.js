angular.module('video-player')
.component('search', {
  bindings: {
    search: '<',
    input: '<'
  },
  templateUrl: '/src/templates/search.html'
});
