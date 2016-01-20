function* idMaker(start){
  var index = start;

  while(index < 100000000000000){
    console.log('in generator');
    yield index++;
  }
  console.log('out generator');
}
var generator = idMaker(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
