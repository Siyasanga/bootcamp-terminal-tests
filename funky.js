var multiplyThem = function(paramOne, paramTwo){
    var result = paramOne * paramTwo;
    return result
};
var ff = multiplyThem(2, 3);
const assert = require('assert');
assert.equal(multiplyThem(2,3),6);
console.log(ff); // should print 6

var ff2 = multiplyThem(15,5)
assert.equal(multiplyThem(15,5),75);
console.log(ff2); // should print 75
