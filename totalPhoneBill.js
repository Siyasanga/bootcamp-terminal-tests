// totalPhoneBill() takes in a string recording each phone call and sms sent
// and calculates the total bill for the data provided.
function totalPhoneBill(record){
  var recordList = record.split(',');
  var totalCost = 0;
  for(var i in recordList){
    if(recordList[i] == "call"){
      totalCost = totalCost + 2.75;
    }
    else{ // If its not a call then its an sms.
      totalCost = totalCost + 0.65;
    }
  }
  return totalCost;
}
module.exports = totalPhoneBill;
