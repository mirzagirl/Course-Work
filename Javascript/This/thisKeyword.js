const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  console.log(obj.a) 
  obj.b() 
  ;(obj.b)()  // (obj.b)() == obj.b()**
  const b = obj.b //Function copied out of object loses its this binding.
  b() 
  obj.b.apply({a: 2}) 
  obj.c() 
  obj.d() //Arrow functions do not have their own this, they inherit it from the parent scope.
  
  // ✅ Best used in:
  
  // Callbacks
  
  // setTimeout
  
  ;(obj.d)() 
  obj.d.apply({a:2})
  // What's Happening
  // 🧠 1. Arrow Functions don't bind their own this
  // They capture the this value from the lexical (outer) scope at the time they are defined.
  
  // In your code, the arrow function d is defined in the global scope (or module scope), not inside the obj context.
  
  // So this inside d refers to whatever this was when obj was defined.
  
  // In most cases, that's:
  
  // window in the browser
  
  // undefined in strict mode or in modules (like in Node or modern React)
  
  // 💡 Important:
  // Calling .apply() or .call() on an arrow function does nothing to this — they cannot be dynamically rebound.
  obj.e() 
  ;(obj.e)()
  obj.e.call({a:2})  
  // Ahhh! That’s a fun little combo of a self-invoking function (IIFE) returning an arrow function — and it’s often used to trap the this context at definition time.
  // It's a regular function (not arrow), so its this depends on how it’s called.
  
  // Since you're invoking it without a context (just calling it normally), this refers to:
  
  // window in browsers (non-strict)
  
  // undefined in strict mode or ES modules
  obj.f()() 
  ;(obj.f())() 
  obj.f().call({a:2}) 
  // e: (function() { return () => { console.log(this.a); } })(),

// why obj.e() console logs 'undefined'?

// In JavaScript, the value of this is determined by how a function is invoked, not where the function is defined.

// When an IIFE (Immediately Invoked Function Expression) is executed, it is not called as a method of an object, but as a standalone function.

// In non-strict mode, if a function is called as a standalone function (not as a method, constructor, event handler, or via call/apply), this inside that function refers to the global object (window in a browser environment, global in Node.js).

// In strict mode ('use strict';), this inside a function that is called as a standalone function is undefined.

// So, when an IIFE is invoked, this inside the IIFE is either the global object (in non-strict mode) or undefined (in strict mode), not the object that contains the IIFE (if there is one).

// This behavior is not unique to IIFEs; it's how this works in JavaScript in general. It's just that with IIFEs, it can be especially confusing, because you might expect this inside an IIFE to refer to an enclosing object or the surrounding scope, but it doesn't -- it follows the same rules as this inside any other function.

//  5



//   1
// 1
// 1
// undefined
// 2
// 1
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// 1
// 1
// 1


