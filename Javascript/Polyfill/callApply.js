//  Call Method


let obj ={
    name:"Alina",
    print(className){
        return `${this.name} ${className}`
    }
}
let obj2={
    name:"john",

}

console.log(obj.print("3rd"))
// console.log(obj2.print("3rd"))

// console.log(obj.print.call(obj2,"college")) // explicitly set this borrow methos of object

//  |||| CALL ||||

Object.prototype.myCall = function(context,...args){
    context.fn = this;
    return context.fn(args);
 }
 
 console.log(obj.print.myCall(obj2,"wasom"));

//   |||| APPLY |||| 

 Object.prototype.myApply = function(context,args){
    if(typeof this != "function")
        throw new Error(this,"Not Callable")
    if(!Array.isArray(args))
        throw new Error("CreateListFromArrayLike called on non array like object")
    context.fn = this;
    return context.fn(...args);
 }
 
 console.log(obj.print.myApply(obj2,["wasom"]))


//   |||| BIND |||| 
let person = {
    name: "Alina",
    whatToDo(work,location){
        console.log(`${this.name} what to do ${work} ${location}`);
    }
}
let person2= {
    name:"Harshu",
}
let bindedWithPerson2 = person.whatToDo.bind(person2,"wash");
bindedWithPerson2("Clothes")

//  |||| POLYFILL ||||
Object.prototype.myPollyFillBind = function(...args){
    if(typeof this != "function")
        throw new Error(`${this} is not a callable function`);
    let fn  = this;
    let obj = args.slice(1)
    return (...params)=>{
       fn.apply(args[0],[...obj,...params])
    }
}

let pollybindedWithPerson2 = person.whatToDo.myPollyFillBind(person2,"wash");
pollybindedWithPerson2("Clothes")






