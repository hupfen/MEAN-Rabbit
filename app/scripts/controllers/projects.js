'use strict';

angular.module('feanApp')
  .controller('ProjectsCtrl', function ($scope, $firebase) {
    var projects = new Firebase('https://meanrabbit.firebaseio.com/projects');
    $scope.projects = $firebase(projects);
  });
