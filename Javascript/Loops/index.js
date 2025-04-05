// looping methods in javascript
//
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//
// for...of loop
const arr = [1, 2, 3];
for (const num of arr) {
    console.log(num);
}
//
// for...in loop
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}
//
// forEach method
const arr2 = [1, 2, 3];
arr2.forEach(num => {
    console.log(num);
});
//
// for await...of loop
async function asyncFunc() {
    for await (const num of arr) {
        console.log(num);
    }
}           
asyncFunc();
//
// while loop
let i = 0;          
while (i < 5) {
    console.log(i);
    i++;
}
//
// do...while loop
let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 5);
//
// for loop with break