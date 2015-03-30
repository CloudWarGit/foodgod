'use strict';

angular.module('famousAngularStarter')
	.factory('navBarSrv', function(){
		//var NarBar = $famous['famous/widgets/NavigationBar'];
		//var narBar = new NarBar();
		//var narBar = {};

		return {
			setBack: function(narBar, back){
				narBar.setOptions({
					backContent: (back)?'<img src="images/reg/back.png">':''
				});
			},
			setMore: function(narBar, more){
				narBar.setOptions({
					moreContent: (more)?'<img src="images/reg/more.png">':''
				});
			}
		};
		//return narBar;
	});