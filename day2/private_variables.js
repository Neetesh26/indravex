console.log("=== JavaScript Private Variables: 2 Methods ===\n");

console.log("--- Method 1: Closures ---");

function createBankAccount(owner, initialBalance) {
  let balance = initialBalance;

  return {
    getOwner: () => owner,
    getBalance: () => balance,
    deposit(amount) {
      balance += amount;
      console.log(`Deposited $${amount}. New balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
        return;
      }
      balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${balance}`);
    }
  };
}

const myAccount = createBankAccount("Sharad", 500);
console.log("Account Owner:", myAccount.getOwner());
console.log("Account Balance:", myAccount.getBalance());
myAccount.deposit(100);
myAccount.withdraw(200);

console.log("Trying to read myAccount.balance directly:", myAccount.balance);
console.log("");

console.log("--- Method 2: Class Private Fields (#) ---");

class GameCharacter {
  #health = 100;
  #name;

  constructor(name) {
    this.#name = name;
  }

  takeDamage(amount) {
    this.#health -= amount;
    if (this.#health <= 0) {
      console.log(`${this.#name} has fainted!`);
    } else {
      console.log(`${this.#name} took ${amount} damage. Health is now: ${this.#health}`);
    }
  }

  getHealth() {
    return this.#health;
  }
}

const hero = new GameCharacter("Warrior");
hero.takeDamage(30);
console.log("Hero health via method:", hero.getHealth());

try {
  eval("hero.#health");
} catch (e) {
  console.log("Accessing '#health' directly throws a crash:", e.name + ": " + e.message);
}

console.log("\nSummary:");
console.log("1. Closures: Works everywhere, hides variables inside a function scope.");
console.log("2. Private Fields (#): Modern class standard, enforced by the language compiler.");
