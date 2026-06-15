// Function Declaration

function greet() {

    console.log("Hello");

}

greet();



// var Hoisting

console.log(a);

var a = 10;



// let Hoisting (TDZ)

try {

    console.log(b);

}

catch {

    console.log("let is in TDZ");

}

let b = 20;



// const Hoisting (TDZ)

try {

    console.log(c);

}

catch {

    console.log("const is in TDZ");

}

const c = 30;



// var Hoisting Inside Function

function test1() {

    console.log(x);

    var x = 100;

}

test1();



// let Hoisting Inside Function

function test2() {

    try {

        console.log(y);

    }

    catch {

        console.log("TDZ");

    }

    let y = 200;

}

test2();



// Primitive Type

function primitive(a) {

    a = a + 5;

    console.log(a);

}

let num = 10;

primitive(num);

console.log(num);



// Reference Type

function reference(obj) {

    obj.age = 25;

}

const user = {

    age: 20

};

reference(user);

console.log(user);



// Object Reference

const person = {

    name: "Neetesh",

    city: "Indore"

};

const student = person;

student.city = "Bhopal";

console.log(person);

console.log(student);



// Deep Memory Example

function memoryDemo() {

    const user = {

        id: 1

    };

    const copy = user;

    copy.id = 10;

    console.log(user);

    console.log(copy);

}

memoryDemo();



// console.trace()

function first() {

    second();

}

function second() {

    third();

}

function third() {

    console.trace();

}

first();



// Lexical Scope

function outer() {

    let name = "Neetesh";

    function inner() {

        console.log(name);

    }

    inner();

}

outer();



// Scope Chain

let globalVar = "Global";

function parent() {

    let parentVar = "Parent";

    function child() {

        let childVar = "Child";

        console.log(globalVar);

        console.log(parentVar);

        console.log(childVar);

    }

    child();

}

parent();



// Strict Mode

"use strict";

function strictMode() {

    let x = 10;

    console.log(x);

}

strictMode();



// Call Stack

function stackOne() {

    stackTwo();

}

function stackTwo() {

    stackThree();

}

function stackThree() {

    console.log("Call Stack");

}

stackOne();