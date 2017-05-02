const findItemsOver = require("../findItemsOver");
const assert = require("assert");
var shoppingList = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 24.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Melrose', price : 27.50 }
];
var result = findItemsOver(shoppingList,23);

describe("findItemsOver()",function(){
  it("It returns products more Expensive than the specified threshold.", function(){
    assert.deepEqual(result,[{ itemName : 'Bread', price : 24.00 },{ itemName : 'Melrose', price : 27.50 }])
  });
}); 
