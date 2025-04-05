// how to iterate in objects in JS
// // 1. Using `for...in` loop
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
//
// 2. Using `Object.keys()`
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
//
// 3. Using `Object.values()`
Object.values(obj).forEach(value => {
  console.log(value);
});
//
// 4. Using `Object.entries()`
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
//
// 5. Using `forEach` on `Object.keys()`
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
//
// 6. Using `for...of` with `Object.keys()`

