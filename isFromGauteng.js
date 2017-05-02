/*
* This function check if a car registration is from Gauteng
* It does this using the built-in methods, startsWith() and endsWith()
*/
function isFromGauteng(carReg){
  return (carReg.startsWith('DR') && carReg.endsWith('GP'));
}
const assert = require ('assert');
assert.equal(isFromPaarl('DR 12 TY GP'), true);
assert.equal(isFromGauteng('CJ 523519'),false);
assert.equal(isFromGauteng('DR 812328 GP'),true);
