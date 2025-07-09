// let, var, and const in JavaScript

// 1. let – Block-scoped, can be updated but not redeclared in the same scope
let name = "Alice";
name = "Bob"; // OK
// let name = "Charlie"; ❌ Error if in the same block
console.log(name); // "Bob"

// 2. var – Function-scoped, can be updated and redeclared
var age = 25;
age = 30; // OK
var age = 35; // Also OK (not recommended)
console.log(age); // 35

// 3. const – Block-scoped, cannot be updated or redeclared
const country = "Canada";
// country = "USA"; ❌ Error: Assignment to constant variable
// const country = "Mexico"; ❌ Error if in same scope
console.log(country); // "Canada"

// const with objects or arrays (can mutate contents)
const user = { name: "Alice" };
user.name = "Bob"; // ✅ This is allowed
console.log(user); // { name: "Bob" }

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
console.log(numbers); // [1, 2, 3, 4]
