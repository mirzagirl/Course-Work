// Question 1:
const obj1 = {
    name: "GPT",
    printDelayed: function () {
      setTimeout(() => {
        console.log(this.name);
      }, 1000);
    },
  };
  
  obj1.printDelayed(); // answer: GPT
  
  // Question 2:
  const obj2 = {
    name: "GPT",
    getName: () => {
      console.log(this.name);
    },
  };
  
  obj2.getName();
  
  // Question 3:
  const length = 20;
  
  const obj3 = {
    length: 10,
    method: function () {
      const inner = () => {
        console.log(this.length);
      };
      inner();
    },
  };
  
  obj3.method();
  
  // Question 4:
  const obj4 = {
    value: 5,
    increment: function () {
      return {
        value: 10,
        incrementArrow: () => {
          console.log(this.value);
        },
      };
    },
  };
  
  obj4.increment().incrementArrow();
  
  // Question 5:
  const obj5 = {
    value: 100,
    print: function () {
      setTimeout(function () {
        console.log(this.value);
      }, 1000);
    },
  };
  
  obj5.print();
  
  // Question 6:
  const obj6 = {
    value: "A",
    method: function () {
      const arrow = () => {
        const nestedArrow = () => {
          console.log(this.value);
        };
        nestedArrow();
      };
      arrow();
    },
  };
  
  obj6.method();
  
  // Question 7:
  const value = "Global";
  
  const obj7 = {
    value: "Object",
    method: () => {
      console.log(this.value);
    },
  };
  
  obj7.method();
  
  // Question 8:
  const obj8 = {
    value: "Outer",
    method: function () {
      return {
        value: "Inner",
        arrow: () => {
          console.log(this.value);
        },
      };
    },
  };
  
  const innerObj = obj8.method();
  innerObj.arrow();