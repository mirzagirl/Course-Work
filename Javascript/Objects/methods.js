// 1. `Object.keys(obj)`
// - Returns an array of a given object's own enumerable property names.
const obj1 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj1);

// 2. `Object.values(obj)`
// - Returns an array of a given object's own enumerable property values.
const values = Object.values(obj1);

// 3. `Object.entries(obj)`
// - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const entries = Object.entries(obj1);

// 4. `Object.assign(target, ...sources)`
// - Copies all enumerable own properties from one or more source objects to a target object.
// - Returns the target object.
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);

// 5. `Object.freeze(obj)`
// - Freezes an object, preventing new properties from being added and existing properties from being removed or changed.
const obj2 = { a: 1 };
Object.freeze(obj2);
obj2.a = 2;

// 6. `Object.seal(obj)`
// - Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
// - Existing properties can still be modified.
const obj3 = { a: 1 };
Object.seal(obj3);
obj3.a = 2;

// 7. `Object.create(proto, propertiesObject)`
// - Creates a new object with the specified prototype object and properties.
const proto = { a: 1 };
const obj4 = Object.create(proto, { b: { value: 2 } });

// 8. `Object.defineProperty(obj, prop, descriptor)`
// - Defines a new property or modifies an existing property on an object.
const obj5 = {};
Object.defineProperty(obj5, 'a', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});

// 9. `Object.defineProperties(obj, props)`
// - Defines multiple properties on an object.
const obj6 = {};
Object.defineProperties(obj6, {
  a: { value: 1, writable: false, enumerable: true, configurable: false },
  b: { value: 2, writable: true, enumerable: true, configurable: true },
});

// 10. `Object.getOwnPropertyDescriptor(obj, prop)`
// - Returns a property descriptor for an own property of an object.
const descriptor = Object.getOwnPropertyDescriptor(obj5, 'a');

// 11. `Object.getOwnPropertyDescriptors(obj)`
// - Returns all own property descriptors of an object.
const descriptors = Object.getOwnPropertyDescriptors(obj6);

// 12. `Object.getPrototypeOf(obj)`
// - Returns the prototype of an object.
const protoOfObj4 = Object.getPrototypeOf(obj4);

// 13. `Object.setPrototypeOf(obj, prototype)`
// - Sets the prototype of an object.
Object.setPrototypeOf(obj4, { b: 2 });

// 14. `Object.isExtensible(obj)`
// - Determines if an object is extensible (can have new properties added).
const isExtensible = Object.isExtensible(obj1);

// 15. `Object.isSealed(obj)`
// - Determines if an object is sealed (no new properties can be added, and existing properties cannot be removed).
const isSealed = Object.isSealed(obj3);

// 16. `Object.isFrozen(obj)`
// - Determines if an object is frozen (no new properties can be added, existing properties cannot be removed or changed).
const isFrozen = Object.isFrozen(obj2);