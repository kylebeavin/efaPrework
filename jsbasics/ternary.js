//Conditional statements
/*
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else{
    console.log("goodbye");
}*/

//Ternary operators

//console.log((x == 0) ? "hello" : (x < 0) ? "hi" : "goodbye"); 
// var i = age;============================big fail=============================================
// x = 30
// var age=(x > 25) ? "old" : (x > 21) ? "younger" : (x > 18) ? "realyoung" : (x < 18) ? "weeone":
// console.log(i);

var x = {};
console.log((typeof x ==='boolean') ? "truthiness" 
    : (typeof x === 'number') ? "itsanumber" 
        : (typeof x === 'string') ? "stringcheese" 
            : "itssomethingelse");