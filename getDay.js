/*
* This function takes in a string parameter representing date
* From the string passed, it determines the day of the week of the specific date
* And returns it.
*/
function getDay(date){
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  Adate = date.split("/"); //extracting data from the date parameter
  day = new Date();
  day.setFullYear(Adate[2],Adate[1]-1,Adate[0]); //setting new date values with Adate list items
  return weekDays[day.getDay()];
}
const assert = require('assert');
assert.equal(getDay("4/11/2016"),'Friday');
assert.equal(getDay("30/11/2016"),'Wednesday');
