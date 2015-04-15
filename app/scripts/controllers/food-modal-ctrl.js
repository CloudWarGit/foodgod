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

  $scope.addSelected = function (item) {
    $scope.selected.selectedList.push(item);
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.selectedList);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
