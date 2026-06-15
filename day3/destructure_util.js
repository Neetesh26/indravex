function getValueByPath(obj, path, defaultValue = undefined) {
  if (obj === null || obj === undefined) {
    return defaultValue;
  }

  const segments = path.split('.');
  
  let current = obj;
  for (const segment of segments) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[segment];
  }

  return current === undefined ? defaultValue : current;
}

function destructure(sourceObj, schema) {
  const result = {};
  for (const [targetKey, path] of Object.entries(schema)) {
    result[targetKey] = getValueByPath(sourceObj, path);
  }
  return result;
}

if (require.main === module) {
  console.log("=== Destructuring Utility Demo ===\n");

  const apiResponse = {
    user: {
      id: "usr_102",
      profile: {
        firstName: "Sharad",
        lastName: "Developer"
      }
    }
  };

  const firstName = getValueByPath(apiResponse, "user.profile.firstName");
  const country = getValueByPath(apiResponse, "user.address.country", "Not Specified");

  console.log("Extracted firstName:", firstName);
  console.log("Extracted country (fallback):", country);

  const schema = {
    id: "user.id",
    name: "user.profile.firstName"
  };
  console.log("\nBatch extraction:", destructure(apiResponse, schema));
}

module.exports = { getValueByPath, destructure };
