/**
 * Day 2: Closure-Based Counter System (Simple version)
 * 
 * What is a closure?
 * It is a function that "remembers" variables from its parent scope,
 * even after the parent function has finished running.
 */

/**
 * Creates a counter with its own private state.
 * @param {number} startVal - Value to start counting from
 * @param {number} stepSize - How much to add or subtract
 */
function createCounter(startVal = 0, stepSize = 1) {
  // These variables are private and cannot be accessed directly from the outside
  let count = startVal;
  let step = stepSize;

  // We return an object containing functions.
  // These functions form "closures" and remember 'count' and 'step'.
  return {
    increment() {
      count += step;
      return count;
    },
    decrement() {
      count -= step;
      return count;
    },
    reset() {
      count = startVal;
      return count;
    },
    setStep(newStep) {
      step = newStep;
    },
    getValue() {
      return count;
    }
  };
}

// Run Demo
if (require.main === module) {
  console.log("=== Closure Counter Demo ===\n");

  // Create two isolated counters
  const counterA = createCounter(10, 2); // starts at 10, counts by 2
  const counterB = createCounter(0, 1);  // starts at 0, counts by 1

  console.log("Counter A value:", counterA.getValue()); // 10
  console.log("Counter B value:", counterB.getValue()); // 0

  console.log("\nIncrementing Counter A twice...");
  counterA.increment();
  console.log("Counter A is now:", counterA.increment()); // 14

  console.log("Incrementing Counter B once...");
  counterB.increment();
  console.log("Counter B is now:", counterB.getValue()); // 1

  console.log("\nResetting Counter A...");
  console.log("Counter A reset value:", counterA.reset()); // 10
  console.log("Counter B value is unaffected:", counterB.getValue()); // 1

  console.log("\nAttempting to read 'count' variable directly (counterA.count):", counterA.count); // undefined
}

module.exports = createCounter;
