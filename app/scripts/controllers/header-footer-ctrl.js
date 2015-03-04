'use strict';

angular.module('famousAngularStarter')
.controller('headerFooterCtrl', function($scope,$famous,$state){

    //调用famo.us库（TabBar、EventHandler）
	var TabBar = $famous['famous/widgets/TabBar'];
    var EventHandler = $famous['famous/core/EventHandler'];
 
    //实例化TabBar，创建4个tab
	$scope.tabBar = new TabBar({});
	$scope.tabBar.defineSection(0,{content: 'Found', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(1,{content: 'Friends', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(2,{content: 'Mssages', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
	$scope.tabBar.defineSection(3,{content: 'MyMenu', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
    //初始化启动时，默认选择第一个tab，即进入found页面
    $scope.tabBar.select(0);
    $state.go('home.found');

    //捕获用户切换tab事件
    var eventHandler = new EventHandler();
    eventHandler.subscribe($scope.tabBar);
    eventHandler.on('select', function(btn) {
    switch (btn.id) {
    case 0:
        $state.go('home.found');
	break;
    case 1:
        $state.go('home.friends');
	break;
    case 2:
        $state.go('home.message');
	break;
	case 3:
        $state.go('home.mymenu');
	break;
    }
    });
});


