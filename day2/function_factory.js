function createHelperFactory(prefix, userName) {
  
  const logMessage = function(message) {
    return `${prefix} : ${message}`;
  };

  const greet = function() {
    return `Hello, ${userName}! Welcome to the system.`;
  };

  return {
    logMessage,
    greet
  };
}

if (require.main === module) {
  console.log("=== Function Factory Helper Demo ===\n");

  const adminHelper = createHelperFactory("[ADMIN]", "Sharad");
  const guestHelper = createHelperFactory("[GUEST]", "Visitor");

  console.log(adminHelper.logMessage("Database connected."));
  console.log(guestHelper.logMessage("Page loaded."));

  console.log(adminHelper.greet());
  console.log(guestHelper.greet());
}

module.exports = createHelperFactory;
