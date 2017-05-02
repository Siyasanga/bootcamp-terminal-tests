function dayToday(){
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  day = new Date().getDay();
  return weekDays[day-1];
}
console.log(dayToday());
const assert = require('assert');
assert.equal(dayToday(), 'Friday');
