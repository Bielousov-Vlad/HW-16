function sum() {
    let result = 0;
    
    return function(num) {
      result += num;
      return result;
    }
  }
  
  const add = sum();
  
  console.log(add(3)); // 3
  console.log(add(5)); // 8
  console.log(add(20)); // 28
  