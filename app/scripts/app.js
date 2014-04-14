'use strict';

angular.module('feanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'markdown'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/wtf',
        controller: 'MainCtrl'
      })
      .when('/post/:Id', {
        templateUrl: 'partials/post',
        controller: 'PostCtrl'
      })
      .when('/projects', {
        templateUrl: 'partials/projects',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });