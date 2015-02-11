'use strict';

angular.module('famousAngularStarter', ['famous.angular'])
  .controller('footerGridCtrl', ['$scope', function ($scope){
  	$scope.footerGridLayoutOptions = {
  		dimensions: [4,1],
  	};

  	$scope.grids = [{bgColor:"orange"}, {bgColor:"red"}, {bgColor:"green"}, {bgColor:"yellow"}];

  }]);