// async keyword makes the function return a Promise, even if you just return a value.

const { scheduler } = require("timers/promises");

// await pauses the function until the Promise resolves.

// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log("Start");
  await wait(1000);
  console.log("End");
})();
// This waits for 1 second before logging "End" to the console.
const wait = (ms) => setTimeout(() => {}, ms);

(async () => {
  console.log("Start");
  await wait(1000);
  console.log("End");
})();
// This will not work as expected because `wait` does not return a Promise.
// The function will not pause for 1 second before logging "End".
// Instead, it will log "End" immediately after "Start".
// bcz settimeout is not a promise its just a schedulerfunction

// 📘 Async/Await JavaScript Notes & Examples

// ✅ What is an async function?
// - A function declared with `async` keyword always returns a Promise.
// - You can use `await` inside it to pause execution until a Promise resolves.

async function exampleAsync() {
    const result = await Promise.resolve("Hello Async!");
    return result;
  }
  
  exampleAsync().then(console.log); // Output: Hello Async!
  
  // ✅ Non-async functions cannot use `await` directly.
  // This will throw an error:
  // const result = await Promise.resolve("Oops"); ❌
  
  // ✅ await only works inside async functions
  // ✅ Even a normal return is wrapped in a Promise
  
  async function simpleReturn() {
    return 42;
  }
  
  simpleReturn().then(console.log); // Output: 42
  
  
  // ✅ Native Async APIs (built-in in JS but not marked async)
  
  // 1. fetch API (browser):
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log("fetch result:", data));
  
  // 2. setTimeout (callback-based, not promise-based)
  // Convert to async-friendly version:
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  (async function demoSleep() {
    console.log("Sleeping...");
    await sleep(1000);
    console.log("Awake after 1 second!");
  })();
  
  // 3. performance.now() is NOT async
  const { performance } = require('perf_hooks');
  console.log("Performance time:", performance.now());
  
  
  // ✅ Common Async Pitfall: Not returning a Promise
  function badWait(ms) {
    setTimeout(() => {}, ms);
  }
  
  (async () => {
    console.log("Start badWait");
    await badWait(1000); // Doesn't wait ❌
    console.log("End badWait"); // This runs immediately
  })();
  
  // ✅ Fixed version:
  function goodWait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  (async () => {
    console.log("Start goodWait");
    await goodWait(1000); // Waits ✅
    console.log("End goodWait");
  })();
  
  // ✅ Order of execution demo
  console.log("A");
  sleep(1000).then(() => console.log("B"));
  console.log("C");
  // Output: A, C, B (because sleep().then(...) is non-blocking)
  
  
  // ✅ Measuring time using performance.now()
  (async () => {
    const start = performance.now();
    await sleep(500);
    const end = performance.now();
    console.log(`Elapsed time: ${end - start}ms`);
  })();
  