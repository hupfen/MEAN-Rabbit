'use strict';

angular.module('feanApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'About',
      'link': '/about'
    }, {
      'title': 'Projects',
      'link': '/projects'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
