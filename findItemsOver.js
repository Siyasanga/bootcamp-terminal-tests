// findItemsOver() takes a list of objects each with a name and price attribute.
// And also a second parameter which is a threshold for the item price.
// It returns products more Expensive than the threshold.
function findItemsOver(list, bar){
  var expensive = [];
  for(i in list){
    if(list[i].price > bar){
      expensive.push(list[i]);
    }
  }
  return expensive;
}
module.exports = findItemsOver;
