'use strict';

angular.module('famousAngularStarter')
   .controller('friendsController', function ($scope, $famous) {
    $scope.flipIt = function() {
       $famous.find('fa-flipper')[0].flip();
    };
    $scope.test = "hehe";
});