// const curry = (fn) => {
//     return function curried(...args) {
//       if (args.length == fn.length) {
//         return fn.apply(this, args);
//       } else {
//         return (...nextArgs) => { 
//             return curried.apply(this, [...args, ...nextArgs]);
//         }
//       }
//     };
//   };
  
//   function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   const curriedSum = curry(sum);
  
//   console.log(curriedSum(1)(2)(3));  // 6
//   console.log(curriedSum(1, 2)(3));  // 6
//   console.log(curriedSum(1)(2, 3));  // 6
//   console.log(curriedSum(1, 2, 3));
  


  function add(a) {
    return function addFunc(b){
      if(b)this.addFunc(a,b);
      else return a;
    }
  }

const ob = {
  name:"John",
  fn: function(){
    console.log(this.name)
  }
} 
function fnc(){
  console.log("this.name")
  return {
    name:"John",
    rdf: this
  }
}
fnc().name;

const obj2 = {
  name:"John",  
  fn:()=>{
    console.log(this.name)
  }
}


  add(1)(2)(3)(4)(5)()