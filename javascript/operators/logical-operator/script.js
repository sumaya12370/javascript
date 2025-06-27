

// && (Logical AND)  - both need to be true for the output to be true 
let a = true;
let b = false;

console.log(a && b); // false
console.log(true && true); // true
console.log(5 > 3 && 10 < 20); // true

// || (Logical OR)  - only one  needs to be true for output to be true 
let c = true;
let d = false;

console.log(a || b); // true
console.log(false || false); // false
console.log(5 > 3 || 10 > 30); // true

// ! (Logical NOT)
let x = true;
let y = false;

console.log(!a); // false
console.log(!b); // true
console.log(!(5 > 3)); // false

// combine examples
var age = 20;
var hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted.");
} 

if (age < 18 || hasID ){
    console.log("not granted acess");
}
 


