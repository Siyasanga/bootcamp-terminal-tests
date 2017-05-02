/*
* This function accepts a string parameter called text
* Perfoms a split function on it
* Then returns the number of car registrations in text.
*/
function countRegNumber(text){
  var carReg = text.split(","); // Splitting the String with ',' as a delimeter
  return carReg.length;
}
module.exports = countRegNumber;
