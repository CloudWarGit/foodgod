'use strict';

angular.module('famousAngularStarter')
   .controller('foundController', function ($scope) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    slides.push({
      image: 'images/138.jpg',
      text: 'Tom'
    });
    slides.push({
      image: 'images/139.jpg',
      text: '加菲猫'
    });
    slides.push({
      image: 'images/140.jpg',
      text: 'Kitty'
    });
    slides.push({
      image: 'images/141.jpg',
      text: '大脸猫'
    });

    //console.log(slides);
    //setInterval(function() {console.log($scope.myInterval);}, 1000);
});


