'use strict';

angular.module('famousAngularStarter')
   .controller('friendsController', ['$scope', '$famous', function ($scope, $famous) {

    $scope.flipIt = function() {
      var something = $famous.find('fa-flipper');
      something[0].flip();
      $scope.test = "haha";
    };
    $scope.test = "hehe";
  }]);