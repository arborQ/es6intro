var numbers = [1,2,3,4,5,6,7];

var addOne  = numbers.map(function(v) { return v + 1; })
var toObject = numbers.map(function(v, i) { return { value : v, index : i }; })
nums  = numbers.map((v, i) => v + i)
