function shuffle(arr) {
    let size = arr.length;
  
    // Loop through array from end to start
    while (size > 0) {
      size--;
      let randomIndex = Math.floor(+(Math.random() * 10) % arr.length);
      // Swap elements at randomIndex and current size position
      [arr[randomIndex], arr[size]] = [arr[size], arr[randomIndex]];
      
      console.log(randomIndex)
    }
  
    return arr;
  }
  
  let arr = [10, 343, 453, 42, 4, 3, 0];
  console.log(shuffle(arr));
  console.log(shuffle(arr));
  console.log(shuffle(arr));
  console.log(shuffle(arr));
  console.log(shuffle(arr));