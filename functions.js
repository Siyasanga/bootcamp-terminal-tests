//an empty function called 'theFunction'
var theFunction = function(){
    // do something here
    // return a result if needed
}

//an function called 'theParamFunction'
var theParamFunction = function(num1, num2){
    //the function logic
    var result = num1 + num2;
    //return parameters
    return result;
};

//prints 3 on the console
const assert = require('assert');
assert.equal(theParamFunction(1,2),3);
