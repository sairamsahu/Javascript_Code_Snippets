
// Compose Multiple Callbacks in Sequence (Callback Hell Refactor)
// Given the following code:
function step1(data, callback) {
    callback(data + 1);
}
function step2(data, callback) {
    callback(data * 2);
}
function step3(data, callback) {
    callback(data - 3);
}

function processInOrder(data, steps, index = 0, callback = (result) => console.log(result)) {
    if (index === steps.length) {
        return callback(data);
    }

    const currentStep = steps[index];
    currentStep(data, (nextData) => {
        processInOrder(nextData, steps, index + 1, callback);
    });
}

processInOrder(2, [step1, step2, step3], 0, (result) => {
    console.log(result); // Expected Output: 3
});


//Write a utility isArrowFunction(fn) that determines whether a passed function is an arrow
//function or not.

function isArrowFunction(fn) {
    return typeof fn !== 'function' ? false : !('prototype' in fn);
}

console.log(isArrowFunction(() => { }));
console.log(isArrowFunction(function () { }));



//Custom Implementation of once() (Callback Control)

function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
    };
}

const logOnce = once(() => console.log("Executed!"));

logOnce();
logOnce();


//Q24. Arrow Function Limitation with this in Object Methods
//Explain and fix the bug:

const obj = {
    count: 0,
    inc: () => {
        this.count++;
        console.log(this.count);
    }
};
obj.inc(); // What's the output? Fix it to work properly.

const obj2 = {
    count: 0,
    inc: null
};

obj2.inc = () => {
    obj2.count++;
    console.log(obj2.count);
};

obj2.inc();

/*

Regular Functions

const obj = {
  count: 0,
  inc() {            // <-- regular function
    this.count++;
    console.log(this.count);
  }
};

obj.inc(); // Output: 1
obj.inc(); // Output: 2 */


// Q25. Implement Function Memoization Using Closures

// Write a function memoize(fn) that caches results of expensive operations.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key]; // Return cached result
        }

        const result = fn.apply(this, args);
        cache[key] = result; // Store result in cache
        return result;
    };
}

const slowAdd = (a, b) => {
    console.log("Computing...");
    return a + b;
};
const memoAdd = memoize(slowAdd);
memoAdd(1, 2);
memoAdd(1, 2);


//Q26. Bind Execution Context with Arrow Function Inside Class
//You’re building a logger that should always refer to the class instance.

class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }

    // Arrow function automatically binds `this`
    log = (message) => {
        console.log(`${this.prefix}: ${message}`);
    };
}

const l = new Logger("Info");
const logMessage = l.log;
logMessage("Test"); // Output: "Info: Test"

// Q27. Implement a Custom .bindPolyfill() Function
//Mimic JavaScript’s native Function.prototype.bind.
Function.prototype.bindPolyfill = function (context, ...bindArgs) {
    const fn = this;

    // Use globalThis if context is null or undefined
    const effectiveContext = context === null || context === undefined ? globalThis : context;

    return function (...callArgs) {
        const args = [...bindArgs, ...callArgs];

        // Create a unique key to avoid property name clashes
        const uniqueKey = Symbol('fn');
        effectiveContext[uniqueKey] = fn;

        // Call the function with this === effectiveContext
        const result = effectiveContext[uniqueKey](...args);

        // Clean up
        delete effectiveContext[uniqueKey];

        return result;
    };
};

function greet(name) {
    return `Hello, ${name}`;
}

const greetJohn = greet.bindPolyfill(null, "John");
console.log(greetJohn()); // "Hello, John"

//  Q28. Debounce Function Using Closures and setTimeout

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        // Clear previous timeout if function is called again
        clearTimeout(timeoutId);

        // Set new timeout
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const debouncedLog = debounce(() => console.log("Fired!"), 300);

debouncedLog(); // Scheduled
debouncedLog(); // Previous canceled, new scheduled
debouncedLog(); // Previous canceled, new scheduled (only this one fires after 300ms)


// Q29. Create a Chainable Method API

const api = {
    value: 0,
    add(x) {
        this.value += x;
        return this; // important for chaining
    },
    subtract(x) {
        this.value -= x;
        return this; // important for chaining
    },
    result() {
        return this.value;
    }
};

console.log(api.add(10).subtract(3).add(5).result()); // Output: 12


// 🔹 Q30. Create a Function Pipeline Executor
//Write a function pipeline that takes an array of functions and a starting value, and passes the
//value through each function.
const pipeline = (funcs) => (input) =>
    funcs.reduce((acc, fn) => fn(acc), input);
const result = pipeline([
    (x) => x + 1,
    (x) => x * 2,
    (x) => x - 4,
])(5); 

console.log(result);