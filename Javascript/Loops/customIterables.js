const counter = {
    start: 1,
    end: 5,
  
    [Symbol.iterator]() {
      let current = this.start;
      const end = this.end;
  
      return {
        next() {
          if (current <= end) {
            return { value: current++, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // 🔁 Use it in a for...of loop
  for (const num of counter) {
    console.log(num);
  }

  const infinite = {
    [Symbol.iterator]() {
      let i = 1;
      return {
        next() {
          return { value: i++, done: false };
        }
      };
    }
  };
  
  const it = infinite[Symbol.iterator]();
  console.log(it.next().value); // 1
  console.log(it.next().value); // 2
  console.log(it.next().value); // 3
  