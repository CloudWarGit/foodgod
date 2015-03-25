'use strict';

angular.module('famousAngularStarter')
  .controller('myInfoController', ['$scope', '$state', '$location', function($scope, $state, $location) {

	//var EventHandler = $famous['famous/core/EventHandler'];

	$scope.myInfoGrid = {
		dimensions: [2,2],
	};

	var tabs = $scope.tabs = [];
	var tab0 = {
		id : 'CreateMenu',
		bgColor : "green",
		content : "新菜谱"
	};

	var tab1 = {
		id : 'CreateDinnerParty',
		bgColor : "orange",
		content : "新饭局"
	};

	var tab2 = {
		id : 'MyMenuList',
		bgColor : "blue",
		content : "我的菜谱"
	};

	var tab3 = {
		id : 'MyDinnerPartyList',
		bgColor : "brown",
		content : "我的饭局"
	};

	tabs.push(tab0,tab1,tab2,tab3);
	//console.log($location.url());

	$scope.tapHandler = function ($event) {
		//$location.path('partials/createmenu.html');
		//console.log($event.target);
		console.log($scope.$index);
		$scope.state = "home.createmenu";
		$scope.$emit('abc',$scope.state);
	};

  }]);
