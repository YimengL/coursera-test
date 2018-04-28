(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.message = "";
    $scope.menu = "";

    $scope.lunchChecker = function() {
      var input = $scope.menu;
      if (input === "") {
        $scope.message = "Please enter data first";
        return;
      }

      var item_list = input.split(",");
      if (item_list.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
      return;
    };
  }
})();
