
function customReduce(arr, callback, initialValue) {

  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
}



function customMap(arr, mappingFunction) {
  return customReduce(arr, (accumulator, item) => {
    accumulator.push(mappingFunction(item));
    return accumulator;
  }, []);
}

function customFilter(arr, checkFunction) {
  return customReduce(arr, (accumulator, item) => {
    if (checkFunction(item)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}



const companyData = {
  name: "HQ",
  budget: 100,
  departments: [
    { name: "Engineering", budget: 500, subdivisions: [{ budget: 150 }, { budget: 200 }] },
    { name: "Marketing", budget: 300, subdivisions: [{ budget: 100 }] }
  ]
};

function calculateTotalBudget(node) {
  let total = node.budget || 0;

  if (node.departments) {
    total += customReduce(node.departments, (sum, dept) => sum + calculateTotalBudget(dept), 0);
  }
  if (node.subdivisions) {
    total += customReduce(node.subdivisions, (sum, sub) => sum + calculateTotalBudget(sub), 0);
  }

  return total;
}

if (require.main === module) {
  console.log("=== Custom Reduce Demo ===\n");

  const nums = [1, 2, 3, 4];
  const sumResult = customReduce(nums, (sum, current) => sum + current, 0);
  console.log("Summing [1, 2, 3, 4] with customReduce:", sumResult); // 10

  const doubled = customMap([1, 2, 3], x => x * 2);
  console.log("Doubled values using customMap:", doubled); // [2, 4, 6]

  const evens = customFilter([1, 2, 3, 4, 5], x => x % 2 === 0);
  console.log("Even numbers using customFilter:", evens); // [2, 4]

  console.log("\nCalculating company budget recursively...");
  console.log("Total Budget:", calculateTotalBudget(companyData)); // 100 + (500 + 150 + 200) + (300 + 100) = 1350
}

module.exports = { customReduce, customMap, customFilter, calculateTotalBudget };
