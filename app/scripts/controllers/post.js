'use strict';

angular.module('feanApp')
  .controller('PostCtrl', function ($scope, $firebase, $routeParams) {
    var post = new Firebase('https://meanrabbit.firebaseio.com/posts/' + $routeParams.Id);
    // Automatically syncs everywhere in realtime
    $scope.post = $firebase(post);
  });
