function flat(arr,depth){
    let results = [];
    let st = [...arr];
    
    while(st.length){
        let poped = st.pop();
        if(Array.isArray(poped) && depth>0){
            st.push(...poped);
            depth--;
        }else{
            results.push(poped);
        }
    }
    return results.reverse();
}
let arr = [[1,2,[3,[4]],3,5,6],4,3,0]

console.log(flat(arr,1));