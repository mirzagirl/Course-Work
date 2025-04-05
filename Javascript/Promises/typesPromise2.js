// Simulating Promises with a timeout for different outcomes
function createPromise(name, delay, shouldResolve = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`${name} resolved in ${delay}ms`);
            } else {
                reject(`${name} rejected in ${delay}ms`);
            }
        }, delay);
    });
}

// Creating Promises
const p1 = createPromise("Promise 1", 1000);  // Resolves in 1 second
const p2 = createPromise("Promise 2", 2000);  // Resolves in 2 seconds
const p3 = createPromise("Promise 3", 3000, false);  // Rejects in 1.5 seconds
const p4 = createPromise("Promise 4", 4000);  // Resolves in 0.5 seconds
// 1. Using Promise.all() - All Promises must resolve, or it rejects if any fails

Promise.all([p1, p2, p3, p4]) // fail first or all suceess with last sucess
    .then((results) => {
        console.log("Promise.all() results:", results);
    })
    .catch((error) => {
        console.error("Promise.all() error:", error);
    });

// 2. Using Promise.race() - Returns the first Promise to settle (either resolve or reject)
Promise.race([p1, p2, p3, p4])  // first resolve reject
    .then((result) => {
        console.log("Promise.race() result:", result);
    })
    .catch((error) => {
        console.error("Promise.race() error:", error);
    });

// 3. Using Promise.any() - Returns the first resolved Promise, ignores rejections
Promise.any([p1, p2, p3, p4]) 
    .then((result) => {
        console.log("Promise.any() result:", result);
    })
    .catch((error) => {
        // AggregateError will be thrown if all Promises reject
        console.error("Promise.any() error (AggregateError):", error);
    });

// 4. Using Promise.allSettled() - Waits for all Promises, giving results of all (fulfilled or rejected)
Promise.allSettled([p1, p2, p3, p4])
    .then((results) => {
        console.log("Promise.allSettled() results:", results);
    });


