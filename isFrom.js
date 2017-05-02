/*
* This function is takes in 2 parameters carReg and location
* Using location, it checks if the car registration belongs
* to the specified location.
*/
function isFrom(carReg, location){
  //console.log(carReg.startsWith(location));
  return carReg.startsWith(location);
}

const assert = require('assert');

assert.equal(isFrom('CY 874324', 'CY'), true);
assert.equal(isFrom('CY 874324', 'CJ'), false);
assert.equal(isFrom('ND 456546', 'ND'), true);
