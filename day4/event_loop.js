console.log("Event Loop");

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");



console.log("-------------------");

console.log("Microtask vs Macrotask");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");



console.log("-------------------");

let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }

});

promise
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});



console.log("-------------------");

async function hello() {

    return "Hello World";

}

hello().then(data => {
    console.log(data);
});



console.log("-------------------");

function getData() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Data Loaded");

        }, 2000);

    });

}

async function showData() {

    let result = await getData();

    console.log(result);

}

showData();



console.log("-------------------");

async function getUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        console.log(data);

    }

    catch (error) {

        console.log(error);

    }

}

getUser();



console.log("-------------------");

async function fetchRetry(url, retries) {

    while (retries > 0) {

        try {

            const response = await fetch(url);

            const data = await response.json();

            return data;

        }

        catch (error) {

            retries--;

            console.log("Retrying...");

        }

    }

    throw new Error("Fetch Failed");

}

fetchRetry(
    "https://jsonplaceholder.typicode.com/users/1",
    3
)
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});



console.log("-------------------");

async function task1() {

    return "Task 1";

}

async function task2() {

    return "Task 2";

}

async function parallelExecution() {

    const result = await Promise.all([
        task1(),
        task2()
    ]);

    console.log(result);

}

parallelExecution();



console.log("-------------------");

async function serialExecution() {

    const first = await task1();

    console.log(first);

    const second = await task2();

    console.log(second);

}

serialExecution();



console.log("-------------------");

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

async function asyncDemo() {
    console.log("Async");
}

asyncDemo();

console.log("End");



console.log("-------------------");

function loop() {

    Promise.resolve().then(loop);

}

// Uncomment to see Microtask Starvation

// loop();

setTimeout(() => {

    console.log("This may never execute");

}, 0);



console.log("-------------------");

async function delay(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

async function demo() {

    console.log("Waiting...");

    await delay(1000);

    console.log("Done");

}

demo();



console.log("-------------------");

Promise.resolve(10)
.then(num => {

    return num * 2;

})
.then(num => {

    console.log(num);

});



console.log("-------------------");

Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
])
.then(result => {

    console.log(result);

});



console.log("-------------------");

Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 2000))
])
.then(result => {

    console.log(result);

});



console.log("-------------------");

async function add(a, b) {

    return a + b;

}

add(5, 10)
.then(result => {

    console.log(result);

});



console.log("-------------------");

async function fetchPosts() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log(data);

}

fetchPosts();



console.log("-------------------");

queueMicrotask(() => {

    console.log("Microtask");

});

setTimeout(() => {

    console.log("Macrotask");

}, 0);

console.log("Main Thread");



console.log("-------------------");

async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");

}

test();

console.log("C");