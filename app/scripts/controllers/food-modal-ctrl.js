angular.module('famousAngularStarter').controller('FoodModalController', function ($scope, $modal, $log) {

  $scope.items = ['大米', '白面', '面包'];

  $scope.open = function (id) {

    var modalInstance = $modal.open({
      templateUrl: id,
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('famousAngularStarter').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0],
    selectedList : []
  };

  var array = $scope.selected.selectedList;

  $scope.addSelected = function (item) {
    var flag = false;
    for (var i=0;i<array.length;i++) {
      var temp = array[i];
      if (item === temp) {
        flag = true;
      }
    }
    if (!flag) {
      array.push(item);
    }
  };

  $scope.deleteSelected = function (item) {
    
    for (var i=0;i<array.length;i++) {
      var temp = array[i];
      if (temp === item) {
        array.splice(i,1);
      }
    }
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.selectedList);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
