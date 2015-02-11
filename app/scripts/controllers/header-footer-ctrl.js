'use strict';

angular.module('famousAngularStarter')
  .controller('headerFooterCtrl', function ($scope,$famous) {
  	var TabBar = $famous['famous/widgets/TabBar']
  	$scope.tabBar= new TabBar();
  	
  	$scope.footerGridLayoutOptions = {
  		dimensions: [4,1],
  	};

  	$scope.grids = [{bgColor:"orange"}, {bgColor:"red"}, {bgColor:"green"}, {bgColor:"yellow"}];
    
  });


