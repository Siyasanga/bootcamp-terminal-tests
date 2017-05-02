/*
* This function
*/
function isTuesday(){
  var today = new Date();
  return (today.getDay() == 2);
}
const assert = require ('assert');
assert.equal(isTuesday(), false);
