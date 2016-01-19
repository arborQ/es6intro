function testFunction(a, b){
  if(a === undefined){
    a = 1;
  }
  if(b === undefined){
    b = 2;
  }

  return { a : a, b : b};
}

console.log(testFunction())
