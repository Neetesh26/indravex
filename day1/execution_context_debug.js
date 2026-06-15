/**
 * Day 1: Execution Context & Call Stack Demo (Simple Tracing)
 * 
 * Think of the Call Stack as a stack of cafeteria trays:
 * - Every time you run a function, you put a new tray on top (Push).
 * - When that function finishes, you take the top tray off (Pop).
 */

console.log("=== Call Stack & Function Execution Tracing ===\n");

function startApp() {
  console.log("[Push Stack] Entering startApp()");
  
  // Call nested function
  loadUser("Sharad");
  
  console.log("[Pop Stack] Exiting startApp()");
}

function loadUser(username) {
  console.log(`[Push Stack] Entering loadUser(username = "${username}")`);
  
  // Call another nested function
  showProfile(username);
  
  console.log(`[Pop Stack] Exiting loadUser()`);
}

function showProfile(name) {
  console.log(`[Push Stack] Entering showProfile(name = "${name}")`);
  
  // Print stack trace using console.trace
  console.log("\n>>> LIVE CALL STACK TRACE <<<");
  console.trace("Checking Stack Trays:");
  console.log(">>> END OF TRACE <<<\n");
  
  console.log(`[Pop Stack] Exiting showProfile()`);
}

// Start the function sequence
startApp();

console.log("\nExplanation of what you saw in console.trace:");
console.log("1. globalContext (The file itself starts running)");
console.log("2. startApp() is called and goes on top of the stack");
console.log("3. loadUser() is called and goes on top of startApp()");
console.log("4. showProfile() is called and goes on top of loadUser()");
console.log("\nWhen showProfile finishes, it is removed, then loadUser is removed, then startApp is removed. The stack is now empty!");
