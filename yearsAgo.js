/*
* This function takes in a date parameter then calculates
* how many years ago the year is.
*/
function yearsAgo(newYear){
  year = new Date();
  year.setFullYear(newYear)  // Setting the year to 2000
  return (new Date().getFullYear() -year.getFullYear());
}
module.exports = yearsAgo;
