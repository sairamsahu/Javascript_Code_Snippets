
//Q1. Write a function filterNumbers that takes an array and a callback.
//The callback decides whether to keep an element.
function filterNumbers(arr, callback) {
    return arr.filter(callback);
}

console.log(filterNumbers([1, 2, 3, 4, 5], (num) => num % 2 === 0));


//Q2. Implement a custom mapArray function that mimics the behavior of
//Array.prototype.map.
function mapArray(arr, callback) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(callback(arr[i], i, arr))
    }
    return temp;
}

const result = mapArray([1, 2, 3], (x) => x * 3); // [3, 6, 9]
console.log(result);


//Q3. Write a function repeatTask(n, task) that runs a given callback
//function n times.
function repeatTask(n, task) {
    for (let i = 0; i < n; i++) {
        task();
    }
}
repeatTask(3, () => console.log('Running...'));


//Q4. Write a function asyncTask that accepts a callback and executes it
//after 2 seconds using setTimeout.
function asyncTask(callback) {
    setTimeout(() => {
        callback()
    }, 2000)
}
asyncTask(() => console.log("Callback executed after delay"));


//Q5. Implement a function doMath(a, b, operation) that can do
//addition, subtraction, etc., based on the callback.
function doMath(a, b, operation) {
    console.log(operation(a, b));
}
doMath(10, 5, (x, y) => x - y); // Output: 5


// Q6. Rewrite a function that calculates factorial using arrow syntax.
const factorial = (n) => {
    // Base cases: return 1 for n = 0 or n = 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120

//Convert a function with traditional function keyword to arrow
//syntax and preserve this context inside a class method.
class Timer {
    name = 'ram';

    start() {
        setInterval(() => {
            console.log(this.name); // refers to Timer instance
        }, 10000);
    }
}

const timer = new Timer();
timer.start(); // Outputs "ram" every second

//Q8. Create an arrow function that returns an object containing name and
//age.
const getUser = (name, age) => ({
    name,
    age,
});
console.log(getUser("Alex", 30));

//Q9. Use arrow functions in an array’s reduce() method to sum up
//numbers.
const total = [5, 10, 20].reduce((acc, val) => acc + val, 0);

console.log(total);

//Q10. Create a function that takes a number and returns a function (using
//    arrow syntax) that adds that number.
const createAdder = (x) => (y) => x + y;
const add5 = createAdder(5);
console.log(add5(10)); // Output: 15



//Q11. Write a function executeByName that accepts a function name as a
//string and executes it.

/*function sayHello() {
    console.log("Hello!");
  }
  
  function executeByName(funcName) {
    if (typeof window[funcName] === 'function') {
      window[funcName](); // Call the function by name from the global scope
    } else {
      console.log(`${funcName} is not a function`);
    }
  }
  
  executeByName("sayHello"); // ➜ prints "Hello!"*/


//Q12. Use .call() to invoke a function with a custom this.

function showCity() {
    console.log(this.city);
}
const person = { city: "Bangalore" };
showCity.call(person);


//Q13. Write a function that logs the time taken to execute another
//function.
function timeLogger(fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`Time taken: ${end - start} ms`);
}



//Q14. Use .apply() to pass arguments from an array to a function.
function sum(a, b, c) {

    return a + b + c;
}
const args = [1, 2, 3];
console.log(sum.apply(null, args));

//Q15. Use .bind() to create a new function with preset arguments.
function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}
const greetHello = greet.bind(null, "Hello");
greetHello("Alice");


//Q16. Create an object with multiple methods and allow calling them dynamically using a string key.
const operations = {
    add: (a, b) => a + b,
    mul: (a, b) => a * b,
};
function executeOperation(opName, a, b) {
    return operations[opName](a, b);
}

console.log(executeOperation('add', 1, 2)
);


// Q18. Write a class with method chaining:

class Person {
    name;
    age;

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    print() {
        console.log(this.name, this.age);
    }
}

// Usage
const obj = new Person();
obj.setName("Bob").setAge(25).print();


// Q19. Add methods dynamically to an object and call them at runtime.

const obj1 = {};

obj1.greet = function () {
    console.log("Hello!");
};

obj1.farewell = function () {
    console.log("Goodbye!");
};

obj1.greet();
obj1.farewell();

//Write a method inside a class and call it externally using .call()
//with a different context.
class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says woof`);
    }
}

const dog = new Dog("Buddy");
const other = { name: "Charlie" };

// Call the `speak` method in the context of `other`
dog.speak.call(other); // Output: Charlie says woof