var objectWithVeryLongName = { firstName : 'Lukasz', lastName : 'Wojcik', age : 31 };

var { firstName, lastName, age } = objectWithVeryLongName

var testFunction = function({ firstName , lastName, age }){
}

testFunction(objectWithVeryLongName);

//and with arrays
var arr = [0, 1, 2];

var [first, second, ,last]= arr;
