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

  const curry1 = (fn) => {
    return function curried(...args) {
      if (args.length == fn.length) {
        return fn(...args);
      } else {
        return (...nextArgs) => { 
            return curried(...args, ...nextArgs);
        }
      }
    };
  };
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum1 = curry1(sum);
  
  console.log(curriedSum1(1)(2)(3));  // 6
  console.log(curriedSum(11, 2)(3));  // 6
  console.log(curriedSum1(1)(2, 3));  // 6
  console.log(curriedSum1(1, 2, 3));


  function curried(func){
    return function innerCurry(...args){
        console.log(args)
        if(func.length<=args.length){
            return func(...args);
        }else{
            return function(...params){
                
                // console.log(args,params)
               return  innerCurry(...args,...params);
            } 
        }
    }
}

function sum(a,b,c){
    return a+b+c+"brak";
}

// let curry = curried(sum)


console.log(curry(1,2,3))
console.log(curry(1)(2)(3))
console.log(curry(1)(2,3))
console.log(curry(1,2)(3))
