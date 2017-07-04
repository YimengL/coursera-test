(function() {
  use 'strict',

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController ', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.checkOffItem = function(itemIdx) {
      ShoppingListCheckOffService.checkOffItem(itemIdx);
    }

    toBuy.items = ShoppingListCheckOffService.getToBuyList();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
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
      item = toBuyList[itemIdx];
      toBuyList.splice(itemIdx, 1);
      alreadyBoughtList.push(item);
    };

    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getAlreadyBoughtList = function() {
      return alreadyBoughtList;
    };

  }

})();
