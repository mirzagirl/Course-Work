// ## Closures: Definition
// A closure is a function that "remembers" the variables from its outer scope even after the outer function has finished executing.
// Closures allow functions to access variables from their lexical scope, enabling powerful patterns like encapsulation, memoization, and currying.

// ## Use Cases of Closures
// | Use Case           | Description                                      |
// |--------------------|--------------------------------------------------|
// | 🔒 Encapsulation   | Private variables/functions in JS                |
// | ⚙ Memoization      | Store computed results in closure                |
// | 🎯 Currying        | Partial application of functions                 |
// | 🧠 Function Factories | Dynamic function creation with preset config   |
// | 🧵 Async Tasks      | Preserve values in loops/timers/callbacks        |

// Example 1: Using `var` in a loop with `setTimeout`
for (var i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 100);
}
// Explanation:
// This will print `0`, `1`, `2` immediately, followed by `3`, `3`, `3` after 100ms.
// The reason is that `var` does not create a block scope, so the value of `i` is shared across iterations.
// By the time the `setTimeout` executes, the loop has completed, and `i` is `3`.

// Example 2: Fixing the issue using an IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(() => console.log(i), 100);
    })(i);
}
// Explanation:
// The IIFE creates a new scope for each iteration, capturing the current value of `i`.
// This ensures that the `setTimeout` callback remembers the correct value of `i` for each iteration.
// Output: `0`, `1`, `2` after 100ms.

// Example 3: Using `let` to create block scope
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Explanation:
// The `let` keyword creates a new block scope for each iteration of the loop.
// This ensures that the `setTimeout` callback has access to the correct value of `i` for each iteration.
// Output: `0`, `1`, `2` after 100ms.

// Notes on Closures:
// Closures are functions that have access to:
// 1. Their own scope.
// 2. The scope of the outer function.
// 3. The global scope.

// ## JavaScript `new` Keyword: Quick Revision

// When you call a function with `new`:
// 1. Creates a new empty object `{}`.
// 2. Sets `this` to point to this new object.
// 3. Implicitly returns the newly created object unless explicitly returned otherwise.

// Example:
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}
const timer = new Timer(); // Correct usage with `new`

// Issues without Arrow Functions or Context Capture:
// Regular function callbacks (e.g., `setInterval`) reset `this` to the global object or `undefined` in strict mode.

// Solutions:
// 1. Use arrow functions (recommended):
setInterval(() => { this.seconds++; }, 1000);

// 2. Or explicitly capture the context:
let self = this;
setInterval(function() { self.seconds++; }, 1000);

// Without `new` keyword:
// - Does not create a new object.
// - `this` refers to the global object (`window` in browsers, `global` in Node.js).
// - Risks global namespace pollution.

// Best Practices:
// 1. Always use `new` when functions are intended as constructors.
// 2. Always use arrow functions or explicitly capture `this` context for asynchronous callbacks.

// closures help in memoization, which is a technique to store the results of expensive function calls and return the cached result when the same inputs occur again. This is particularly useful in recursive functions like Fibonacci calculations.

// Example of Memoization with Closures
// Memoization is a technique to optimize recursive functions by caching results of expensive function calls.
// This is particularly useful in recursive functions like Fibonacci calculations.
// Memoization Example: Fibonacci Function
// The Fibonacci sequence is defined as:
// F(0) = 0
// F(1) = 1 
// F(n) = F(n-1) + F(n-2) for n > 1
function memoFib() {
    const memo = {};
  
    return function fib(n) {
      if (n in memo) return memo[n];
      if (n <= 1) return n;
      return memo[n] = fib(n - 1) + fib(n - 2);
    };
  }
  
  const fib = memoFib();
  console.log(fib(10));



  var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function(i) {
    return function() {
      return i;
    };
  })(i);
}

console.log(funcs[0](), funcs[1](), funcs[2]());

// Output: 0 1 2

// Because the IIFE (Immediately Invoked Function Expression) captures the current i per iteration.

// No shared closure → each function has its own i.


// How would you implement once() — a function that runs only once using closures?

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

// Usage:
const init = once(() => console.log("Initialized!"));

init(); // Initialized!
init(); // nothing

// ## Equality in JavaScript

// 1. `==` (Abstract Equality)
// - Performs type coercion if the types are different.
// - Example:
console.log(5 == "5"); // true (string "5" is coerced to number 5)

// 2. `===` (Strict Equality)
// - Does not perform type coercion; checks both value and type.
// - Example:
console.log(5 === "5"); // false (different types: number vs string)

// 3. `Object.is()`
// - Similar to `===` but handles special cases like `NaN` and `-0`.
// - Examples:
console.log(Object.is(NaN, NaN)); // true (unlike `===`, which returns false)
console.log(Object.is(-0, 0)); // false (distinguishes between -0 and 0)

// 4. `null` and `undefined`
// - `null == undefined` is true (abstract equality).
// - `null === undefined` is false (strict equality).
console.log(null == undefined); // true
console.log(null === undefined); // false

// 5. Comparing Objects
// - Objects are compared by reference, not by value.
// - Example:
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2); // false (different references)
console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj1); // true (same reference)

// 6. Special Cases
// - `NaN` is not equal to itself with `==` or `===`.
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// - Use `Number.isNaN()` to check for `NaN`.
console.log(Number.isNaN(NaN)); // true
