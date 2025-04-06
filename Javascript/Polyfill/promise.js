// |||| Promise Pollyfill ||||

let fetchRequest = function(name){
    return new Promise((resolve,reject)=>{
        resolve(name);
    })
}

fetchRequest("ALina").then((res)=>{
    console.log("res  ",res);
    return "Cought you";
}).then((res)=>{
    console.log("res  ",res)
})

let fetchRequest1 = function(name){
    return new myPollyPromise((resolve,reject)=>{
        resolve(name);
    })
}

// let myPollyPromise =  function(executor){
    
  
//     this.then(){

//     }
//     this.catch(){
//     }
//     this.finally(){

//     }
//    }
// }




