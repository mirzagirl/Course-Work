 let promise  = function asyncFunction(time,isResolved){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(isResolved){
            resolve("Resolved");
        }else{
            reject("Rejected");
        }
       })
    })
 }

 let result = Promise.all([promise(1000,true),promise(2000,false),promise(3000,true)])
 result.then((res)=>{
    console.log(res);
 }
 ).catch((err)=>{
    console.log(err);
 })


 let promise1 = () => new Promise((resolve,reject)=>{
    resolve("reolved")
    reject({data:"alina"})
})

try{
     let data  = await Promise.all([promise1(),promise1()])
     console.log("a = ",data)
}catch(e){
    console.log("eooor ",e)
}

