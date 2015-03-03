'use strict';

angular.module('famousAngularStarter')
.controller('headerFooterCtrl', function($scope,$famous){


	var TabBar = $famous['famous/widgets/TabBar'];
    var EventHandler = $famous['famous/core/EventHandler'];
    var eventHandler = new EventHandler();

	$scope.tabBar = new TabBar({});
	$scope.tabBar.defineSection(0,{content: 'Found', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(1,{content: 'Friends', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(2,{content: 'Mssages', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(3,{content: 'MyMenu', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
    $scope.tabBar.select(0);

    var contentUrl = "";
    
    var setSrc = function (page) {
        contentUrl = page;
    };

    eventHandler.subscribe($scope.tabBar);
    $scope.tabBar.on('select', function(btn) {
    switch (btn.id) {
    case 0:
        setSrc("partials/found.html");
        $scope.getSrc = function () {
        return contentUrl;
        };
	break;
    case 1:
        setSrc("partials/friends.html");
	break;
    case 2:
        setSrc("partials/messages.html");
	break;
	case 3:
        setSrc("partials/mymenu.html");
	break;
    }
    });
});


