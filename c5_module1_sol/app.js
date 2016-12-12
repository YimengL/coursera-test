(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.items = "";
    $scope.message = "";

    $scope.check = function() {
      var number = $scope.items.split(',').length;
      if ($scope.items.length == 0) {
        $scope.message = "Please enter data first";
      }
      else if (number <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };

  };
})();
