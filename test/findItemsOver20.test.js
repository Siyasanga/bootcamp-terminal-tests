const findItemsOver20 = require("../findItemsOver20");
const assert = require("assert");
var shoppingList = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 24.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Melrose', price : 27.50 }
];
describe("findItemsOver20()", function(){
  it("Return all the products that have a price more than R20.",function () {
    assert.deepEqual(findItemsOver20(shoppingList,20),[{ itemName : 'Bread', price : 24.00 },{ itemName : 'Cheese', price : 23.00 },{ itemName : 'Melrose', price : 27.50 }]);
  });
});
