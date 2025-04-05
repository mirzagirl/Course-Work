function counter(val){
    let count = val;
    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        getCountValue(){
            return count;
        }
    }
}

let countFunc = counter(0);

console.log(countFunc.increment());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.increment());
console.log(countFunc.getCountValue());

const a =10;
a =11;

const arr = [1, 2, 3]; //reference
arr = 4; 
console.log(arr)



const name = "sam";
name[1] = "m";

console.log(name);



console.log(printFunc)

var printFunc = function(){
    return arguments;
}

console.log(printFunc(1,2,3))


console.log(printFunc1)

var printFunc1 = ()=>{
    return arguments;
}

console.log(printFunc1(1,2,3,4,5))



const person1 ={
    name:"alina",
    print(...country){
      console.log(this.name,country[0])
    }
}
const person2={
    name:"anyli"
}


console.log(person1.print.call(person2,"india","apop"))

// try to create different senarios , focus on more examples
























