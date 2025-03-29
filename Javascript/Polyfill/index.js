Function.prototype.myBind = function(...params){
    console.log("params  ",params)
    console.log("this",this)
    let thisContext = this;
    let fn = params[0]
    return (...args) => {
      console.log('args ',args)
        let param = params.slice(1)
        return thisContext.call(fn,...param,...args);
        // explaination of above line
        // fn is the object on which we want to call the function
        // param is the arguments that we want to pass to the function
        // args is the arguments that we want to pass to the function that is being called
        // so we are calling the function on the object fn with the arguments param and args        
    }
}

let obj = {
    name:"alina",
    country:"india",
    print(){
        return `${this.name} ${this.country}`
    }
}
let obj2 = {
    name:"alina 1",
    country:"india 1"
}

let a = obj.print.myBind(obj2,"annni");

console.log(a("inai 2"))