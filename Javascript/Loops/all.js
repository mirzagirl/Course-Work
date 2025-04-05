// Explanation of forEach, for...in, and for...of loops in JavaScript

// 1. forEach
// - Iterates over the elements of an array and executes a callback function for each element.
// - Works only on arrays.
// - Cannot use break, continue, or return to exit early.
const arr = [1, 2, 3];
arr.forEach(num => {
    console.log(num); // Logs: 1, 2, 3
});

// 2. for...in
// - Iterates over the enumerable properties (keys) of an object.
// - Works on objects and arrays but is primarily used for objects.
// - Includes inherited properties from the prototype chain.
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]); // Logs: a 1, b 2
}

// 3. for...of
// - Iterates over the values of an iterable object (e.g., arrays, strings, maps, sets).
// - Works on any iterable but does not work on plain objects unless explicitly made iterable.
// - Can use break, continue, and return to control the loop.
const arr2 = [1, 2, 3];
for (const num of arr2) {
    if (num === 2) continue; // Skips 2
    console.log(num); // Logs: 1, 3
}

// Hard Example: Why forEach can't be used for every loop

// forEach does not support early exit
arr.forEach(num => {
    if (num === 2) {
        // break; // SyntaxError: Illegal break statement
    }
    console.log(num);
});

// forEach does not wait for asynchronous operations
arr.forEach(async num => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(num); // Logs numbers asynchronously, but 'Done' logs first
});
console.log('Done');

// Summary Table:
// | Feature         | forEach        | for...in         | for...of         |
// |------------------|----------------|------------------|------------------|
// | **Works on**     | Arrays         | Objects, Arrays  | Iterables        |
// | **Iterates over**| Values         | Keys             | Values           |
// | **Early Exit**   | ❌             | ✅               | ✅               |
// | **Async Support**| ❌             | ✅ (manual)      | ✅               |