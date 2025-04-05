// Example Promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 Resolved!'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 Rejected!'), 1500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 Resolved!'), 2000));

// Using Promise.all
Promise.all([promise1, promise3]) // promise2 omitted as it rejects
  .then(results => console.log('Promise.all results:', results))
  .catch(error => console.log('Promise.all error:', error));

// Using Promise.race
Promise.race([promise1, promise2, promise3])
  .then(result => console.log('Promise.race result:', result))
  .catch(error => console.log('Promise.race error:', error));

// Using Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log('Promise.allSettled results:', results));

// Using Promise.any
Promise.any([promise1, promise2, promise3])
  .then(result => console.log('Promise.any result:', result))
  .catch(error => console.log('Promise.any error:', error));