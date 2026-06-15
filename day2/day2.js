// Function Declaration

function add(a, b) {

    return a + b;

}

console.log(add(10, 20));



// Function Expression

const sub = function(a, b) {

    return a - b;

};

console.log(sub(20, 10));



// Arrow Function

const multiply = (a, b) => {

    return a * b;

};

console.log(multiply(5, 4));



// Lexical Scope

let city = "Indore";

function outer() {

    let name = "Neetesh";

    function inner() {

        console.log(name);

        console.log(city);

    }

    inner();

}

outer();



// Scope Chain

let x = 100;

function first() {

    let y = 200;

    function second() {

        let z = 300;

        console.log(x);

        console.log(y);

        console.log(z);

    }

    second();

}

first();



// Simple Closure

function greet() {

    let message = "Welcome";

    return function() {

        console.log(message);

    };

}

const hello = greet();

hello();



// Closure Counter

function counter() {

    let count = 0;

    return function() {

        count++;

        console.log(count);

    };

}

const c = counter();

c();

c();

c();



// Function Factory

function calculator() {

    return {

        add(a, b) {

            return a + b;

        },

        sub(a, b) {

            return a - b;

        },

        mul(a, b) {

            return a * b;

        }

    };

}

const calc = calculator();

console.log(calc.add(5, 5));

console.log(calc.sub(10, 3));

console.log(calc.mul(4, 5));



// Private Variable using Closure

function bankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {

            balance = balance + amount;

        },

        withdraw(amount) {

            balance = balance - amount;

        },

        show() {

            console.log(balance);

        }

    };

}

const account = bankAccount();

account.show();

account.deposit(500);

account.show();

account.withdraw(300);

account.show();



// Pure Function

function square(num) {

    return num * num;

}

console.log(square(5));

console.log(square(5));



// Impure Function

let total = 0;

function addValue(value) {

    total = total + value;

    return total;

}

console.log(addValue(10));

console.log(addValue(10));



// IIFE

(function() {

    console.log("IIFE Executed");

})();



// Module Pattern using IIFE

const userModule = (function() {

    let username = "Neetesh";

    return {

        getName() {

            return username;

        },

        setName(name) {

            username = name;

        }

    };

})();

console.log(userModule.getName());

userModule.setName("Sharad");

console.log(userModule.getName());



// Closure Example

function outerFunction() {

    let outerVariable = "JavaScript";

    function innerFunction() {

        console.log(outerVariable);

    }

    return innerFunction;

}

const fun = outerFunction();

fun();



// Nested Closure

function levelOne() {

    let a = 10;

    function levelTwo() {

        let b = 20;

        function levelThree() {

            console.log(a);

            console.log(b);

        }

        return levelThree;

    }

    return levelTwo();

}

const result = levelOne();

result();



// Counter with Increment & Reset

function createCounter() {

    let count = 0;

    return {

        increment() {

            count++;

            console.log(count);

        },

        reset() {

            count = 0;

            console.log(count);

        }

    };

}

const counter1 = createCounter();

counter1.increment();

counter1.increment();

counter1.reset();



// Multiple Utilities Factory

function utilityFactory() {

    return {

        upper(text) {

            return text.toUpperCase();

        },

        lower(text) {

            return text.toLowerCase();

        },

        length(text) {

            return text.length;

        }

    };

}

const util = utilityFactory();

console.log(util.upper("javascript"));

console.log(util.lower("NODE"));

console.log(util.length("Developer"));



// Closure Checkpoint

function example() {

    let value = 50;

    return function() {

        console.log(value);

    };

}

const demo = example();

demo();