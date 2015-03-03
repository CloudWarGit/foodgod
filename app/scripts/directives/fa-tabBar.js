var myModule = angular.module('famousAngularStarter',['famous.angular']);
myModule.directive('fa-tabBar',[$famous, function ($famous){
	return {
		restrict: 'EA',
		transclude: true,
		scope: true,
		template: '<div></div>',
		compile: function(scope,element,attrs){
			var TabBar = $famous['famous/widgets/TabBar'];
			var tabBar = new TabBar();
		}

	}
}]);