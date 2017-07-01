(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.countItem = function() {
      var itemArr = $scope.items.split(" ");
      if (itemArr[0] == "") {
        $scope.message = "Please enter data first";
      }
      else if (itemArr.length <= 3) {
        $scope.message =  "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };
  }
})();
