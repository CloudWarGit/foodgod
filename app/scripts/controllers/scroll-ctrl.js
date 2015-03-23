'use strict';

angular.module('famousAngularStarter')
	.controller('scrollController', function($scope) {

		var items = $scope.items = [];

		var item = {
			image: 'http://placekitten.com/g/300/200',
			color: 'red',
			content: 'something'
		};

		var item1 = {
			image: 'http://famo.us/integrations/angular/img/famous-angular-logos.png',
			color: 'blue',
			content: 'something'
		};

		items.push(item);
		//items.push(item1);

		//console.log(slides);
		//setInterval(function() {console.log($scope.myInterval);}, 1000);
	});
