'use strict';

angular.module('famousAngularStarter',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/header-footer.html',
        controller: 'headerFooterCtrl'
      })
      .state('home.found', {
        url: '/found',
        templateUrl: 'partials/found.html',
        controller: 'foundController'
      })
      .state('home.friends', {
        url: '/friends',
        templateUrl: 'partials/friends.html',
        controller: 'friendsController'
      })
      .state('home.message', {
        url: '/message',
        templateUrl: 'partials/messages.html'
        //controller: 'MainCtrl'
      })
      .state('home.myinfo', {
        url: '/myinfo',
        templateUrl: 'partials/myinfo.html'
        //controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
