// Day -1 

// Create a function named add that takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Convert the above add function into a function expression
const addExpression = function (a, b) {
    return a + b;
}

console.log(addExpression(1, 2));

// Write a function isEven that returns true if a number is even
function isEven(num) {
    return num % 2 === 0 ? true : false;
}

console.log(isEven(10));

// Create an object car with a method startEngine that logs "Engine Started"
const car = {
    name: 'Thar',
    startEngine: function () {
        return 'car started';
    }
}

const vehicle = car;
console.log(vehicle.startEngine());

// write a function to reverse a string
function reverseString(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

console.log(reverseString('cisco'));
console.log('cisco'.split('').reverse().join(''));

// Create a method inside an object that calculates the area of rectangle

const rectObj = {
    calc: function (l, b) {
        return l * b;
    }
};

const result = rectObj;
console.log(result.calc(5, 4));

// How is this handled in normal function vs methods in objects
function greet() {
    return `Hello, ${this.name}`;
}

const person = { name: 'Ram' };

console.log(greet.call(person));

const nameObj = {
    name: 'sai',
    greet: function () {
        console.log(this.name);
    }
}

nameObj.greet();

const firstName = {
    name: 'ram',
    displayName: function () {
        let greetings = () => {
            console.log(this.name);
        }
        greetings();
    }
}

firstName.displayName();
