/*
* This function check if a car registration is from Cape Town
* It does this using the built-in method, startsWith()
*/
function isFromCapeTown(carReg){
  return carReg.startsWith('CA');
}
const assert = require ('assert');
assert.equal(isFromCapeTown('CA 523519'), true);
assert.equal(isFromCapeTown('CY 523519'),false);
assert.equal(isFromCapeTown('CA 812328'),true);
