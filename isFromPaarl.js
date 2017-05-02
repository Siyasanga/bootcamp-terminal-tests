/*
* This function check if a car registration is from Paarl
* It does this using the built-in method, startsWith()
*/
function isFromPaarl(carReg){
  return carReg.startsWith('CJ');
}
const assert = require ('assert');
assert.equal(isFromPaarl('CJ 523519'), true);
assert.equal(isFromPaarl('CJ 523519'),true);
assert.equal(isFromPaarl('CA 812328'), false);
