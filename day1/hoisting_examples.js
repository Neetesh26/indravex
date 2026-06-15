/**
 * Day 1: Understanding Hoisting in JavaScript (Simple Examples)
 * 
 * What is Hoisting? 
 * Think of it as JavaScript looking at your code before running it, and virtually
 * moving your variable and function declarations to the top of their containers (scopes).
 */

console.log("=== JavaScript Hoisting: Easy Examples ===\n");

// ---------------------------------------------------------
// Example 1: The 'var' keyword
// ---------------------------------------------------------
console.log("--- 1. Hoisting with 'var' ---");
try {
  // We print 'a' before creating it. It doesn't crash! It just says undefined.
  console.log("Value of 'a' before declaration:", a); 
  var a = 42;
  console.log("Value of 'a' after declaration:", a); 
} catch (e) {
  console.error("Error:", e.message);
}
console.log("Explanation: JavaScript saw 'var a = 42' and split it into two parts: 'var a' (declaration) and 'a = 42' (value assignment). It moved 'var a' to the top, so JavaScript knew 'a' existed but didn't know its value yet (undefined).\n");


// ---------------------------------------------------------
// Example 2: The 'let' and 'const' keywords (Temporal Dead Zone)
// ---------------------------------------------------------
console.log("--- 2. Hoisting with 'let' (The Temporal Dead Zone) ---");
try {
  // Accessing 'b' before its declaration line crashes the program!
  console.log("Accessing 'b' early...");
  console.log(b); 
} catch (e) {
  console.log("Caught expected error:", e.name + ": " + e.message);
}
let b = 100;
console.log("Value of 'b' after declaration:", b);
console.log("Explanation: 'let' and 'const' variables are also moved to the top, but they are NOT initialized. The time between entering the scope and reaching the line where they are declared is a 'Dead Zone'. Accessing them here crashes the program.\n");


// ---------------------------------------------------------
// Example 3: Function Declarations vs. Function Expressions
// ---------------------------------------------------------
console.log("--- 3. Function Declarations vs. Expressions ---");
try {
  // We can call a regular function declaration before we write it!
  console.log(sayHello()); // Works!

  // But we cannot call a function expression before we write it!
  sayGoodbye(); // Crashes because sayGoodbye is undefined!
} catch (e) {
  console.log("Caught expected error:", e.name + ": " + e.message);
}

// 1. Regular Function Declaration (Fully Hoisted)
function sayHello() {
  return "Hello! I am fully hoisted!";
}

// 2. Function Expression (Hoisted as a variable, not a function)
var sayGoodbye = function() {
  return "Goodbye!";
};
console.log("Explanation: Regular functions (sayHello) are completely hoisted, so you can call them anywhere. Function expressions (sayGoodbye) act like normal variables: the name is hoisted but is undefined initially, so calling it crashes.\n");


// ---------------------------------------------------------
// Example 4: Class Hoisting
// ---------------------------------------------------------
console.log("--- 4. Class Hoisting ---");
try {
  // You cannot create an object from a class before writing the class
  const myDog = new Dog("Buddy"); 
} catch (e) {
  console.log("Caught expected error:", e.name + ": " + e.message);
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
console.log("Explanation: Classes behave like 'let' and 'const'. They are hoisted, but you cannot use them until the code execution reaches their declaration line.\n");


// ---------------------------------------------------------
// Example 5: Block Scoping (Variables in Curly Braces)
// ---------------------------------------------------------
console.log("--- 5. Block Scoping ---");
{
  var insideVar = "I can escape curly braces!";
  let insideLet = "I am trapped in curly braces!";
}
console.log("Accessing var outside block:", insideVar); // Works!
try {
  console.log("Accessing let outside block:", insideLet); // Crashes!
} catch (e) {
  console.log("Caught expected error:", e.name + ": " + e.message);
}
console.log("Explanation: 'var' ignores block boundaries (curly braces) and is accessible outside. 'let' and 'const' respect blocks and are trapped inside.\n");


// ---------------------------------------------------------
// Example 6: Redeclaration and Variable Shadowing
// ---------------------------------------------------------
console.log("--- 6. Variable Shadowing ---");
var name = "Alice (Global)";
function testShadow() {
  // The local variable name is hoisted to the top of this function, hiding the global variable
  console.log("name inside function before local declaration:", name); // undefined
  var name = "Bob (Local)";
  console.log("name inside function after local declaration:", name); // Bob
}
testShadow();
console.log("Explanation: The local 'var name' in the function shadows (hides) the global 'name'. Because it is hoisted, the global value is inaccessible inside the function from the start.\n");


// ---------------------------------------------------------
// Example 7: Function Parameters vs. Local Variables
// ---------------------------------------------------------
console.log("--- 7. Parameters vs. Local Variables ---");
function parameterDemo(x) {
  console.log("Initial parameter value:", x); // 10
  var x; // Redundant declaration
  console.log("Value after writing 'var x' without assigning value:", x); // Still 10!
  x = 20; // Reassigning
  console.log("Value after assigning x = 20:", x); // 20
}
parameterDemo(10);
console.log("Explanation: Function parameters are ready to use. Declaring the same variable name using 'var x' does not erase or overwrite the parameter's value.\n");


// ---------------------------------------------------------
// Example 8: Undeclared Variables and Strict Mode
// ---------------------------------------------------------
console.log("--- 8. Strict Mode and Implicit Globals ---");
(function() {
  undeclaredVar = "leaked"; // No strict mode: created on global scope
})();
console.log("Leaked variable:", undeclaredVar);

try {
  (function() {
    "use strict";
    strictUndeclared = "fails"; // Strict mode enabled: crashes!
  })();
} catch (e) {
  console.log("Caught expected strict error:", e.name + ": " + e.message);
}
console.log("Explanation: In normal mode, writing to an undeclared variable makes it global. In strict mode ('use strict'), JavaScript catches this and throws a ReferenceError to prevent global scope pollution.\n");


// ---------------------------------------------------------
// Example 9: Function Hoisting Precedence over Var
// ---------------------------------------------------------
console.log("--- 9. Function vs. Var Precedence ---");
// What happens if we have a function and a var with the same name?
console.log("Type of 'testName' before assignment:", typeof testName); // "function"

var testName = 100;
console.log("Type of 'testName' after assignment:", typeof testName); // "number"

function testName() {
  return "I am a function";
}
console.log("Explanation: Both functions and var are hoisted, but functions are hoisted first and take priority. The compiler ignores the duplicate 'var testName' declaration, but when the code runs, assigning 'testName = 100' overwrites it.\n");


// ---------------------------------------------------------
// Example 10: Global Object Binding
// ---------------------------------------------------------
console.log("--- 10. Global Object Bindings ---");
var myGlobalVar = "I bind to window";
let myGlobalLet = "I do NOT bind to window";

console.log("Var directly accessible:", myGlobalVar);
console.log("Let directly accessible:", myGlobalLet);
console.log("Explanation: In a browser environment, top-level variables created with 'var' are automatically attached to the global 'window' object (window.myGlobalVar). Variables created with 'let' and 'const' are kept separate and are not attached to the window.\n");
