/*
* This function check if a car registration is from belville
* It does this using the built-in method, startsWith()
*/
function isFromBellville(carReg){
  return carReg.startsWith('CY');
}
module.exports = isFromBellville;
