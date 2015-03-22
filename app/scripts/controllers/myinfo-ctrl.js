'use strict';

angular.module('famousAngularStarter')
  .controller('myInfoController', ['$scope', function($scope) {

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
	//tabs.push(tab1);
	//tabs.push(tab2);
	//tabs.push(tab3);

 /*
    $scope.list = [
      {content:"hello", bgColor: "#b58900"},
      {content:"world", bgColor: "#cb4b16"},
      {content: "famous", bgColor: "#dc322f"},
      {content: "angular", bgColor: "#d33682"},
      {content: "is", bgColor: "#6c71c4"},
      {content: "-----cool!", bgColor: "#268bd2"}
    ];
*/
  }]);
