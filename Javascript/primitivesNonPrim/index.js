// Primitive Data Types
const str = "Hello";       // String
const num = 42;            // Number
const bool = true;         // Boolean
const undef = undefined;   // Undefined
const n = null;            // Null
const sym = Symbol("id");  // Symbol
const bigInt = 123n;       // BigInt

// Non-Primitive Data Types
const obj = { key: "value" };       // Object
const arr = [1, 2, 3];              // Array (special type of object)
const func = function() {};         // Function (special type of object)
const date = new Date();            // Date (object)
const map = new Map();              // Map (object)
const set = new Set();              // Set (object)

// Key Differences Between Primitive and Non-Primitive Data Types:

// 1. Primitive Data Types:
// - Immutable: Their values cannot be changed once created.
// - Stored directly in the stack memory.
// - Compared by value.
// - Examples: String, Numberm, Boolean, Undefined, Null, Symbol, BigInt.

// 2. Non-Primitive Data Types:
// - Mutable: Their values can be changed after creation.
// - Stored in the heap memory, with a reference stored in the stack.
// - Compared by reference (not value).
// - Examples: Object, Array, Function, Date, Map, Set.

// Example of Primitive Immutability:
let a = 10;
a = 20; // The variable `a` is reassigned to a new value, but the value `10` itself is immutable.

// Example of Non-Primitive Mutability:
const objExample = { key: "value" };
objExample.key = "new value"; // The object is mutated (its content is changed).