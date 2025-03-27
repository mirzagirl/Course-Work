const curry = (fn) => {
    return function curried(...args) {
      if (args.length == fn.length) {
        return fn.apply(this, args);
      } else {
        return (...nextArgs) => { 
            return curried.apply(this, [...args, ...nextArgs]);
        }
      }
    };
  };
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)(3));  // 6
  console.log(curriedSum(1, 2)(3));  // 6
  console.log(curriedSum(1)(2, 3));  // 6
  console.log(curriedSum(1, 2, 3));
  