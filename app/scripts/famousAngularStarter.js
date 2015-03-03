'use strict';

angular.module('famousAngularStarter',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/header-footer.html',
        controller: 'headerFooterCtrl'
      })
      .state('home.found', {
        url: '/found',
        templateUrl: 'partials/found.html'
        //controller: 'MainCtrl'
      })
      .state('home.friends', {
        url: '/friends',
        templateUrl: 'partials/friends.html'
        //controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
