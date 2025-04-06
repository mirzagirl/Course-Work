// Comparing two empty objects
// console.log({} === {}); // false - Different object references
console.log({} == {});  // false - Different object references

// Comparing two variables pointing to the same object
const x = { value: 10 };
const y = x;
console.log(x === y); // true - Same object reference
console.log(x == y);  // true - Same object reference

// Comparing two variables pointing to the same object
const z = { value: 10 };
const v = z;
console.log(z === v); // true - Same object reference
console.log(z == v);  // true - Same object reference

// Comparing an object with null
console.log({} === null); // false - Different types
console.log({} == null);  // false - null only equals null or undefined

// Comparing an object with undefined
console.log({} === undefined); // false - Different types
console.log({} == undefined);  // false - null or undefined only equals null or undefined

// Comparing an object with boolean values
console.log({} === true);  // false - Different types
console.log({} == true);   // false - Objects are not coerced to booleans
console.log({} === false); // false - Different types
console.log({} == false);  // false - Objects are not coerced to booleans

// Comparing an object with numbers
console.log({} === 0); // false - Different types
console.log({} == 0);  // false - Objects are not coerced to numbers

// Comparing an object with an empty string
console.log({} === ""); // false - Different types
console.log({} == "");  // false - Objects are not coerced to strings

// Comparing an object with NaN
console.log({} === NaN); // false - NaN is not equal to anything, even itself
console.log({} == NaN);  // false - NaN is not equal to anything, even itself

// Comparing an object with Infinity
console.log({} === Infinity); // false - Different types
console.log({} == Infinity);  // false - Objects are not coerced to numbers

// Comparing an object with negative numbers
console.log({} === -1); // false - Different types
console.log({} == -1);  // false - Objects are not coerced to numbers

// Comparing an object with strings
console.log({} === "hello"); // false - Different types
console.log({} == "hello");  // false - Objects are not coerced to strings

// Comparing an object with a Symbol
console.log({} === Symbol()); // false - Different types
console.log({} == Symbol());  // false - Symbols are unique and not coerced

// Comparing an object with BigInt
console.log({} === BigInt(1)); // false - Different types
console.log({} == BigInt(1));  // false - Objects are not coerced to BigInt
console.log({} === 1n);        // false - Different types
console.log({} == 1n);         // false - Objects are not coerced to BigInt

// Comparing an object with numbers and strings
console.log({} === 1);    // false - Different types
console.log({} == 1);     // false - Objects are not coerced to numbers
console.log({} === "1");  // false - Different types
console.log({} == "1");   // false - Objects are not coerced to strings

// Comparing an object with boolean strings
console.log({} === "true");  // false - Different types
console.log({} == "true");   // false - Objects are not coerced to strings
console.log({} === "false"); // false - Different types
console.log({} == "false");  // false - Objects are not coerced to strings

// Comparing an object with the string "null"
console.log({} === "null"); // false - Different types
console.log({} == "null");  // false - Objects are not coerced to strings