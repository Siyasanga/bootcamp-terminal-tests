var theFunction = function(){
    console.log('this is the function executing');
}

//what does this print
console.log(theFunction);

console.log(typeof theFunction);

//to call the function
theFunction();

//only now 'this is the function' is printed out to the console
