angular.module('famousAngularStarter')
  .directive('cooksteps', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			$scope.pics = [];
			$scope.addPic = function(){
				var i = $scope.pics.length;
				$scope.pics.push("#/"+i);
			};
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<h2>123</h2>',
		templateUrl: 'partials/cooksteps-block.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		/*link: function($scope, iElm, iAttrs, controller) {
			
		}*/
	};
  }]);