// Day 2

// write a function greetUser that takes a name and a callback to greet them
function greetUser(name, callback) {
    return callback(name);
}

function sayHello(name) {
    return `Hello ${name}`;
}

console.log(greetUser('sai', sayHello));


// write a higher order function calculator that takes a callback for operation
function calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

console.log(calculator(1, 2, add));
console.log(calculator(1, 2, sub));

// convert a normal function into an arrow function. show the difference in behaviour with this.

function squaredNumbers(arr) {
    return arr.map(function (value) {
        return value * value;
    })
}

console.log(squaredNumbers([1, 2, 3]));

// arrow function

function squaredArray(arr) {
    return arr.map((y) => y * y);
}

console.log(squaredArray([1, 2, 3]));


// use setTimeout to delay a function execution and pass a callback

function delayMessage(name, callback) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
        callback();
    }, 1000)
}

function todayTasks() {
    console.log('Today Task: UI Test case');
}

delayMessage('ram', todayTasks);



// use an arrow function to map an array of numbers to their squares
const names = ['rama', 'krishna', 'rama'];

const result = names.map((name) => {
    return `Hare  ${name}`
});

console.log(result);

const numbers = [10, 20, 30];

const results = numbers.map(number => number * number);

console.log(results);


// compare arrow function vs regular function inside an object

const employeeObj = {
    name: 'john',
    designation: function () {
        return `${this.name} is a software engineer`
    }
}

const a = employeeObj;
console.log(a.designation());

const nameObj = {
    name: 'john',
    designation: () => {
        return `${this.name} is a software engineer`
    }
}

const b = nameObj;
console.log(b.designation());

// demonstrate arrow function's this inside a setTimeout in an object

const nameObjArrow = {
    name: 'john',
    designation: () => {
        setTimeout(() => {
            return `${this.name} is a software engineer`
        }, 1000)
    }
}

const c = nameObjArrow;
console.log(c.designation());

// create an event listener using a callback function 

// <button id="myButton">Click Me</button>

// 1. Get the element
const button = document.getElementById("myButton");

// 2. Define the callback function
function handleClick(event) {
  console.log("Button was clicked!");
  console.log("Event object:", event);
}

// 3. Add event listener
button.addEventListener("click", handleClick);

