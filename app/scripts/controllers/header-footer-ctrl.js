'use strict';

angular.module('famousAngularStarter')
    .controller('headerFooterCtrl', function($scope, $famous, $state, navBarSrv, $rootScope) {

        var state='';
        //var Page = stateSrv.stateChange(navBar);

        //调用famo.us库（TabBar、EventHandler）
        var NavBar = $famous['famous/widgets/NavigationBar'];
        var TabBar = $famous['famous/widgets/TabBar'];
        var EventHandler = $famous['famous/core/EventHandler'];
        

        //实例化导航栏
        var navBar = $scope.navBar = new NavBar({
            size: [undefined, 50],
            content: '发现',
            moreContent: '',
            backContent: '',
            properties: {
                lineHeight: '75px'
            }
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

                    var curState = toState.name;
                    if((curState=='home.found')||(curState=='home.found')||(curState=='home.friends')||(curState=='home.message')||(curState=='home.myinfo.views')){
                        navBarSrv.setBack(navBar, false);
                    }else{
                        navBarSrv.setBack(navBar, true);
                        state = fromState.name;
                    }
        });



        //实例化TabBar，创建4个tab
        var tabBar = $scope.tabBar = new TabBar({});
        tabBar.defineSection(0, {
            content: 'Found',
            onClasses: ['tabbuton'],
            offClasses: ['tabbutoff']
        });
        tabBar.defineSection(1, {
            content: 'Friends',
            onClasses: ['tabbuton'],
            offClasses: ['tabbutoff']
        });
        tabBar.defineSection(2, {
            content: 'Mssages',
            onClasses: ['tabbuton'],
            offClasses: ['tabbutoff']
        });
        tabBar.defineSection(3, {
            content: '我',
            onClasses: ['tabbuton'],
            offClasses: ['tabbutoff']
        });
        //初始化启动时，默认选择第一个tab，即进入found页面
        //$scope.navBar.setContent("发现");
        $scope.tabBar.select(0);
        $state.go('home.found');

        //捕获用户切换tab事件,同时显示相应页面及导航栏
        var eventHandler = new EventHandler();
        eventHandler.subscribe($scope.tabBar);
        eventHandler.on('select', function(btn) {
            switch (btn.id) {
                case 0:
                    $state.go('home.found');
                    $scope.navBar.setContent("发现");
                    break;
                case 1:
                    $state.go('home.friends');
                    $scope.navBar.setContent("好友");
                    break;
                case 2:
                    $state.go('home.message');
                    $scope.navBar.setContent("消息");
                    break;
                case 3:
                    $state.go('home.myinfo.views');
                    $scope.navBar.setContent("菜谱");
                    break;
            }
        });

        $scope.$on('goto', function(event, data){
            //console.log(data);
            $state.go(data);
            //$scope.navBar.setOptions({backContent: "",});
        });

        //console.log(state);
        var tbHandler = new EventHandler();
        tbHandler.subscribe(navBar);
        tbHandler.on('back', function(){
            $state.go(state);
        });
        
    });