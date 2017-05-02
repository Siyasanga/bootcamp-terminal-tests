// determine which of their departments are the most profitable
// Returns a string with the department that has the most sales
function mostProfitableDepartment(salesData){
  var maxDep = 0;
  var depSales = {};
  var department;
  // Calculating totals with for-loop
  for (i in salesData){
    if(depSales[salesData[i].department] == undefined){
      depSales[salesData[i].department] = salesData[i].sales;
    }
    else {
      depSales[salesData[i].department] = depSales[salesData[i].department] + salesData[i].sales;
    }
  } // end of for-loop
  // Looking for the most profitable department
  for(i in depSales){
    if(i == undefined)
      break;
    if(depSales[i] > maxDep){
      maxDep = depSales[i];
      department = i;
    }
  }
  return (department+": R"+depSales[department]);
} // End of mostProfitableDepartment
module.exports = mostProfitableDepartment;
