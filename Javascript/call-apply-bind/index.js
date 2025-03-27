// Question 1:
function greet() {
    console.log(this.name);
  }
  
  const obj1 = { name: "Alice" };
  const bound = greet.bind(obj1);
  bound.call({ name: "Bob" });
  
  // Question 2:
  function sum(a, b) {
    console.log(this.value + a + b);
  }
  
  const obj2 = { value: 10 };
  sum.call(obj2, 5, 10);
  sum.apply(obj2, [5, 10]);
  sum.bind(obj2, 5, 10)();
  
  // Question 3:
  const person = {
    name: "Alice",
    getName: function () {
      return this.name;
    },
  };
  
  const newPerson = { name: "Bob" };
  console.log(person.getName.apply(newPerson));
  
  // Question 4:
  function multiply(x) {
    return this.value * x;
  }
  
  const obj4 = { value: 5 };
  const double = multiply.bind(obj4, 2);
  console.log(double(10));
  
  // Question 5:
  function log() {
    console.log(this);
  }
  
  const boundLog = log.bind("Hello");
  boundLog();
  
  // Question 6:
  const user = {
    name: "Alice",
    greet() {
      console.log(`Hello, ${this.name}`);
    },
  };
  
  setTimeout(user.greet.bind(user), 1000);
  
  // Question 7:
  function display() {
    console.log(this.a, this.b);
  }
  
  const obj7_1 = { a: 1, b: 2 };
  const obj7_2 = { a: 3, b: 4 };
  
  display.call(obj7_1);
  display.call(obj7_2);
  
  // Question 8:
  const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  const boundGetX = unboundGetX.bind(module);
  
  console.log(unboundGetX());
  console.log(boundGetX());
  