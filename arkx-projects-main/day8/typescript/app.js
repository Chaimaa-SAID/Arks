/******* variables  */
// strings
var firstname = 'HELLO';
console.log(firstname);
// numbers
var n = 6;
console.log(n);
// boolean
var isPresent = true;
console.log(isPresent);
// any
var a = 7; // any means this variable can hold any value. (not recommended)
a = false; // NO ERROR
console.log(a);
/******* les tableaus  */
var arr = [1, 2, 3];
var a2 = ["hi", "friends"];
console.log(arr.push(5));
console.log(arr);
console.log(a2);
// define our tuple
var ourTuple;
/******* les objests  */
var obj;
// Initialized Correctly
obj = {
    name: "Steve",
    age: 40
};
// ERROR: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
console.log(obj);
/******* les fonctions  */
function add(a, b) {
    return a + b;
}
var greet = function (name) {
    return "Hello ".concat(name);
};
// The type void can be used to indicate a function doesn't return any value.
function display(name) {
    console.log(name);
}
display("aissame");
