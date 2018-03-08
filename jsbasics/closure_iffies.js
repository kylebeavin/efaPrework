//closure is a function inside of a function
//iife are immediately invoked function expression
/*
var result = function () { 
    var name = "Barry"; 
    return name; 
}(); 

console.log(result)
*///console.log(name)

var result = (function() {
    console.log('======================================')
})();
console.log(result);//you get undefined because the variable does not get returned with a value