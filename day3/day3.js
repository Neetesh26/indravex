// ===============================
// Arrays
// ===============================

const arr = [10, 20, 30, 40];

console.log(arr[0]);
console.log(arr.length);

arr.push(50);
arr.pop();

arr.unshift(5);
arr.shift();

console.log(arr);



// ===============================
// Sparse Array
// ===============================

const sparse = [];

sparse[2] = 100;
sparse[5] = 200;

console.log(sparse);
console.log(sparse.length);



// ===============================
// Custom map()
// ===============================

function myMap(array, callback) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        result.push(callback(array[i]));

    }

    return result;

}

console.log(myMap([1,2,3], x => x * 2));




// ===============================
// Custom filter()
// ===============================

function myFilter(array, callback){

    let result = [];

    for(let i=0;i<array.length;i++){

        if(callback(array[i])){

            result.push(array[i]);

        }

    }

    return result;

}

console.log(myFilter([1,2,3,4,5], x => x>2));




// ===============================
// Custom reduce()
// ===============================

function myReduce(array, callback, initial){

    let accumulator = initial;

    for(let i=0;i<array.length;i++){

        accumulator = callback(accumulator,array[i]);

    }

    return accumulator;

}

let total = myReduce([1,2,3,4],(a,b)=>a+b,0);

console.log(total);




// ===============================
// Reduce Nested Objects
// ===============================

const users = [

    {name:"A",score:10},
    {name:"B",score:20},
    {name:"C",score:30}

];

const sum = users.reduce((acc,user)=>{

    return acc + user.score;

},0);

console.log(sum);




// ===============================
// Objects
// ===============================

const student={

    name:"Neetesh",

    age:22

};

console.log(student.name);

student.city="Indore";

console.log(student);




// ===============================
// Prototype
// ===============================

function Person(name){

    this.name=name;

}

Person.prototype.sayHello=function(){

    console.log("Hello "+this.name);

}

const p=new Person("Neetesh");

p.sayHello();




// ===============================
// Shallow Copy
// ===============================

const obj1={

    name:"Rahul",

    address:{

        city:"Delhi"

    }

};

const obj2={...obj1};

obj2.address.city="Mumbai";

console.log(obj1);

console.log(obj2);




// ===============================
// Deep Copy
// ===============================

function deepClone(obj){

    if(obj===null || typeof obj!=="object"){

        return obj;

    }

    let copy=Array.isArray(obj)?[]:{};

    for(let key in obj){

        copy[key]=deepClone(obj[key]);

    }

    return copy;

}

const original={

    name:"Neetesh",

    address:{

        city:"Indore"

    }

};

const cloned=deepClone(original);

cloned.address.city="Bhopal";

console.log(original);

console.log(cloned);




// ===============================
// Destructuring
// ===============================

const person={

    name:"Neetesh",

    age:22,

    city:"Indore"

};

const {name,age}=person;

console.log(name);

console.log(age);




// ===============================
// Array Destructuring
// ===============================

const nums=[10,20,30];

const [a,b,c]=nums;

console.log(a);

console.log(b);

console.log(c);




// ===============================
// Nested Destructuring
// ===============================

const employee={

    id:1,

    profile:{

        firstName:"Neetesh",

        lastName:"Prajapati"

    }

};

const {

    profile:{

        firstName

    }

}=employee;

console.log(firstName);




// ===============================
// Reusable Destructuring Utility
// ===============================

function getValue(obj,path){

    let keys=path.split(".");

    let current=obj;

    for(let key of keys){

        if(current==null){

            return undefined;

        }

        current=current[key];

    }

    return current;

}

function destructure(obj,schema){

    let result={};

    for(let key in schema){

        result[key]=getValue(obj,schema[key]);

    }

    return result;

}

const api={

    user:{

        id:100,

        profile:{

            name:"Sharad"

        }

    }

};

const schema={

    id:"user.id",

    name:"user.profile.name"

};

console.log(destructure(api,schema));




// ===============================
// Spread Nested Object
// ===============================

const user1={

    name:"Neetesh",

    address:{

        city:"Indore"

    }

};

const user2={

    ...user1

};

user2.address.city="Bhopal";

console.log(user1);

console.log(user2);




// ===============================
// Interview Checkpoint
// ===============================

console.log("Spread operator makes only shallow copy.");

console.log("Nested objects share same reference.");

console.log("Changing nested object affects original.");