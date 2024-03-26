const name = "Ashutosh"
let address = "lucknow"
var mobile = "1335346544"
state = "uttar pradesh"
let country

// trying to modify the values

// name = ashu
// console.log(name);

/*
Using var is not a good option for declaring variables in JavaScript. This is because var does not understand scope (i.e., {}), so when you use it in a for loop and try to loop through {}, it won't work properly. Additionally, if you assign any value to a var variable again, the data will change everywhere it is referenced, potentially causing unintended side effects. While it's possible to store a value in any variable without declaring it, this is also not a good practice. Instead, it's best to use const and let for declaring variables.
*/

address = "ambedkarnagar"
mobile = "888888888888"
state = "up"

console.log(address);
console.table([address, mobile, state, country])