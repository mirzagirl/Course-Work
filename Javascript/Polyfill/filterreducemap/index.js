Array.prototype.mapPoly = function(callback){
    let temp = [];
    for(let i=0;i<this.length;i++){
       let element = callback(this[i],i,this)
        if(element)
          temp.push(element);
    }
    return temp;
}
function callbackMap(ele,index,arr){
    if(ele%2)return {"even":ele};
    else return { "odd":ele};
}
console.log([1,2,3,4,5,6,7,8,9].mapPoly(callbackMap))
Array.prototype.filterPoly = function(callback){
    let temp = [];
    for(let i=0;i<this.length;i++){
       let element = callback(this[i],i,this)
        if(element)
          temp.push(this[i]);
    }
    return temp;
}
function callback(ele,index,arr){
    if(ele%2)return false;
    else return true;
}
console.log([1,2,3,4,5,6,7,8,9].filterPoly(callback))
Array.prototype.reducePoly = function(callback,currentVal){
    let temp = currentVal;
    for(let i=0;i<this.length;i++){
        temp= callback(temp,this[i],i,this)
    }
    return temp;
}
function add(accu,val,index,arr){
    return accu+val;
}
console.log([1,2,3].reducePoly(add,0))
