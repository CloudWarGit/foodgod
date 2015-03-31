'use strict';

angular.module('famousAngularStarter')
	.factory('stateSrv', function($rootScope, navBarSrv){
		/*var Page = {
			backState : '',
			//toState : '',
			currentState: ''
		};*/
/*		var fromState;*/
		/*var navBar = {};*/
		

		return {
			Page : {
				backState : '',
				//toState : '',
				currentState: ''
			},
			stateChange : function(Page, navBar){

				$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

					var curState = toState.name;
					if((curState=='home.found')||(curState=='home.found')||(curState=='home.friends')||(curState=='home.message')||(curState=='home.myinfo.views')){
						navBarSrv.setBack(navBar, false);
						/*navBarSrv.setBack(navBar, true);
						Page.backState = fromState.name;
						Page.currentState = curState;*/
						console.log('bbb');
						console.log(curState);
					}else if(curState=='home.createmenu'){
						navBarSrv.setBack(navBar, true);
						Page.backState = fromState.name;
						Page.currentState = curState;
						console.log('aaa');
						console.log(Page.currentState);
					}
					/*console.log(fromState.name);
					console.log(curState);
					console.log(Page.currentState);*/
					console.log(Page);
				});

				console.log(Page);

				return Page;
			}
		};

	});