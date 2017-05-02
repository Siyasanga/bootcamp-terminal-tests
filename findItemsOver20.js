// findItemsOver20() takes a list of objects, each object having 2 attributes
// one called name and the other price.
// It returns all the products that have a price more than R20.
function findItemsOver20(list){
  var expensive = [];
  for(var i in list){
    if(list[i].price > 20){
      expensive.push(list[i]);
    }
  }
  return expensive;
}
module.exports = findItemsOver20;
