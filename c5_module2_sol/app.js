(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .controller('ToBuyController', ToBuyController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.checkOffItem = function(itemIdx) {
      ShoppingListCheckOffService.checkOffItem(itemIdx);
    }

    toBuy.items = ShoppingListCheckOffService.getToBuyList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "milk", quantity: 3 },
      { name: "apples", quantity: 5 },
      { name: "peaches", quantity: 4 },
      { name: "melons", quantity: 6 },
      { name: "juice", quantity: 3 }
    ];

    var alreadyBoughtList = [];

    service.checkOffItem = function(itemIdx) {
      var item = toBuyList[itemIdx];
      toBuyList.splice(itemIdx, 1);
      alreadyBoughtList.push(item);
    };

    service.getAlreadyBoughtList = function() {
      return alreadyBoughtList;
    };

    service.getToBuyList = function() {
      return toBuyList;
    };

  }

})();
