const obj = {
    3: "three",
    1: "one",
    21111: "two",
    a: "A",
    b: "B"
  };

  console.log(obj[21111]);

  

// Sorting the keys of the object
const sortedKeys = Object.keys(obj).sort((a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return a.localeCompare(b);
    }
    return Number(a) - Number(b);
}); 


let obj2 = {
    a: 1,
    b: 2,
    c: 3
}

obj2 = Object.entries(obj2).reduce((acc, [key, value]) => {
    acc[key] = value * 2;
    return acc;
}
, {});
console.log(obj2);
// Output: { a: 2, b: 4, c: 6 }

const obj3 = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 42;
delete obj.b;
obj.c = 100;

console.log(obj); // { a: 1, b: 2 }
// what is freeze?
// Object.freeze() prevents modification of existing property attributes and values, and prevents the addition of new properties.


// Dont complete the code snippet please 
let student = {
  name:"alina",
  rolno:45
}
console.log(student);

let student2 = student;
student2.name = "sana";
console.log(student2);
console.log(student);

// what is above called ?? 
// The above code demonstrates object reference in JavaScript.
// When you assign an object to another variable, both variables point to the same object in memory.
// Therefore, changes made through one variable will be reflected in the other.
// This is because objects in JavaScript are reference types, not value types.
// In the example, `student` and `student2` refer to the same object.
// The above code demonstrates a shallow copy.


// A shallow copy means that only the top-level properties are copied.
// If the object contains nested objects, those nested objects are still referenced.
// To create a deep copy, you would need to use methods like `JSON.parse(JSON.stringify(obj))` or libraries like Lodash.

let student3 = JSON.parse(JSON.stringify(student));

console.log(student3);
student3.name = "sana2";
console.log(student3);
console.log(student3.name);
console.log(student.name);
// The above code demonstrates a deep copy.
// A deep copy means that all levels of the object are copied.
// Changes made to the deep copy do not affect the original object.
// In the example, `student3` is a deep copy of `student`, so changing `student3.name` does not affect `student.name`.
// This is because `JSON.parse(JSON.stringify(obj))` creates a new object with its own memory reference.


// what [ ] this brackets does in JS?
// In JavaScript, square brackets `[]` are used for several purposes:
// 1. **Array Literals**: They create an array.
//    Example: `let arr = [1, 2, 3];`       
// 2. **Array Indexing**: They access elements in an array or object.
//    Example: `let firstElement = arr[0];`
// 3. **Object Property Access**: They access properties of an object using a string key.
//    Example: `let obj = { a: 1 }; let value = obj['a'];`
// 4. **Destructuring Assignment**: They extract values from arrays or properties from objects.
//    Example: `let [x, y] = arr;`
// 5. **Computed Property Names**: They create object properties dynamically.
//    Example: `let key = 'a'; let obj = { [key]: 1 };`
// 6. **Spread Operator**: They spread elements of an array.
//    Example: `let newArr = [...arr];`
// 7. **Array Methods**: They call array methods.
//    Example: `arr.push(4);`
// 8. **Regular Expressions**: They define character classes.
//    Example: `/[a-z]/` matches any lowercase letter.
// 9. **Type Checking**: They check if a variable is an array.
//    Example: `Array.isArray(arr);`
// 10. **JSON Notation**: They represent arrays in JSON.
//    Example: `let json = '[1, 2, 3]';`
// 11. **TypeScript**: They define array types.
//     Example: `let arr: number[];`