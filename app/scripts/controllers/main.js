'use strict';

angular.module('feanApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var posts = new Firebase('https://meanrabbit.firebaseio.com/posts');
    // Automatically syncs everywhere in realtime
    $scope.posts = $firebase(posts);
  });
