// new Error("pop") is just a normal object like { message: "pop" }

// Returning an error object from .then() does NOT throw or reject the Promise

// So it goes to the next .then(), not .catch()

//  but throw "error" is a special case which rejects the Promise
let promise = new Promise((res,rej)=>{
    setTimeout(()=>res(2*2),2000);
    return 100;
})
// console.log(Promise.resolve(100))
// console.log("p =",promise.then(console.log))

promise.then(()=>{return new Error("test");})
// But if you throw inside a Promise, JavaScript automatically converts it into a rejected Promise.
.catch(e=>{console.log("error cout",e);return "pop";})
.then((e)=>console.log("data = ",e))

Promise.resolve()
  .then(() => {
    throw new Error("pop");
  })
  .then((res) => {
    console.log("Then:", res);
  })
  .catch((err) => {
    console.log("Catch:", err.message);
  });

function fnt(e){
    return e
}

console.log(fnt`alina alina ${"pop"}`)