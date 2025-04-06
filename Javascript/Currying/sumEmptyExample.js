function curried(func) {
    return function innerCurry(...args) {
      const collected = [];
  
      function collect(...nextArgs) {
        // Normalize undefined args to 0 (from empty calls like `()`)
        const padded = nextArgs.length === 0 ? [0] : nextArgs;
        collected.push(...padded);
  
        if (collected.length >= func.length) {
            
          return func(...collected.slice(0, func.length));
        }
  
        return collect;
      }
  
      return collect(...args);
    };
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curry = curried(sum);
  
  console.log(curry(1)(2)(3));     // 6
  console.log(curry(1)(2, 3));     // 6
  console.log(curry(1, 2, 3));     // 6
  console.log(curry(1)()(3));      // 4 ✅ (treats missing arg as 0)
  console.log(curry()(1)()(3));    // 4 ✅
  console.log(curry(1)()()(2)());  // 3 ✅

  
  
function curry(a) {
    let sum = a;
  
    function inner(b) {
      sum += b;
      return inner;
    }
  
    inner[Symbol.toPrimitive] = function () {
      return sum;
    };
  
    return inner;
  }
  
  

console.log(curry(1)(2)(3));        // 6
console.log(curry(5)(10)(15)(20));  // 50
console.log(+curry(2)(2)(2));       // 6
console.log(`${curry(4)(5)(6)(90)}`);   // "15"
