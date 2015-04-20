angular.module('famousAngularStarter')
  .controller('CookStepController', function ($scope) {
    $scope.steps = [];
    $scope.addStep = function(){
		var i = $scope.steps.length;
		$scope.steps.push(i+1);
    };
  });