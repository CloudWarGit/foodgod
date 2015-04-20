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
        abstract: true,
        url: '/myinfo',
        templateUrl: 'partials/myinfo.html'
        //controller: 'MainCtrl'
      }).state('home.myinfo.views', {
        views: {
          'something': {
            templateUrl: 'partials/myinfo-top.html',
          },
          'grid': {
            templateUrl: 'partials/myinfo-grid.html'
          }
        }
      }).state('home.createmenu', {
        url: '/createmenu',
        templateUrl: 'partials/createmenu.html'
      }).state('home.selectfood', {
        url: '/selectfood',
        templateUrl: 'partials/selectfood.html'
      }).state('home.cooksteps', {
        url: '/cooksteps',
        templateUrl: 'partials/cooksteps.html'
      }).state('home.newdp', {
        url: '/newdinnerparty',
        templateUrl: 'partials/newdinnerparty.html'
      }).state('home.mymenulist', {
        url: '/mymenulist',
        templateUrl: 'partials/mymenulist.html'
      }).state('home.mydplist', {
        url: '/mydplist',
        templateUrl: 'partials/mydplist.html'
      });

    //$urlRouterProvider.otherwise('/');
  });
