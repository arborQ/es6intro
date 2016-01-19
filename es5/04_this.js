
var testFunction = function(){
  this.nums = [1,2,3,4,5,6,7,8,9,10,11];
  this.fives = [];
  this.nums.forEach(function (v) {
      if (v % 5 === 0)
          this.fives.push(v);
  });
}
var testObject = new testFunction();
console.log(testObject.fives);
