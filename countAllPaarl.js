// This function takes in regNumbers which is a string of comma seperated
// registration numbers. It splits the string into an array
// Using a forIn loop it probes the array to return a of registrations starting with 'CJ'
function countAllPaarl(regNumbers){
  var regList = regNumbers.split(',');
  var allFromPaarl = [];
  for(var i in regList){
    if(regList[i].startsWith('CJ')){
      allFromPaarl.push(regList[i]);
    }
  }
  return allFromPaarl.length;
}
module.exports = countAllPaarl;
