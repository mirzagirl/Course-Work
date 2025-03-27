const user = {
  name: "Bob",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

setTimeout(user.greet, 1000); 
// Output: Hello, undefined (or error in strict mode)
setTimeout(user.greet, 1000)

setTimeout(function() {
  user.greet.apply(user);
}, 1000);
// Question 1:

// Read Copy 
const obj1 = {
    name: "ChatGPT",
    regularFunction: function () {
      console.log(this.name);
    },
    arrowFunction: () => {
      console.log(this.name);
    },
  };
  
  obj1.regularFunction();
  obj1.arrowFunction();
  
  // Question 2:
  const obj2 = {
    name: "ChatGPT",
    getName: function () {
      return this.name;
    },
  };
  
  const getName = obj2.getName;
  console.log(getName());
  
  // Question 3:
  const obj3 = {
    name: "ChatGPT",
    printName() {
      console.log(this.name);
    },
  };
  
  setTimeout(obj3.printName, 1000);
  
  // Question 4:
  function Person(name) {
    this.name = name;
  }
  
  const p = Person("Alice");
  console.log(name);
  console.log(p);
  
  // Question 5:
  const user1 = {
    firstName: "John",
    getName() {
      const firstName = "Jane";
      return this.firstName;
    },
  };
  
  console.log(user1.getName());
  
  // Question 6:
  // var length = 10; //uncommented to remove error
  
  function callback() {
    console.log(this.length);
  }
  
  const obj4 = {
    length: 5,
    method(fn) {
      fn();
      arguments[0]();
    },
  };
//   method(fn) {
//     fn.call(this);         // now this.length === obj.length === 5
//     arguments[0].call(this); // now also logs obj.length === 5
//   },
//   obj.method(callback);
  
  obj4.method(callback);
  
  // Question 7:
  const user2 = {
    name: "ChatGPT",
    logMessage() {
      console.log(this.name);
    },
  };
  
  const logMessage = user2.logMessage.bind({ name: "Bound GPT" });
  logMessage.call({ name: "Call GPT" });
  
  // Question 8:
  const objA = {
    name: "A",
    print: function () {
      console.log(this.name);
    },
  };
  
  const objB = {
    name: "B",
  };
  
  (objB.print = objA.print)();