function isWeekDay(day){
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (weekDays.indexOf(day) <= 4);
}
module.exports = isWeekDay;
