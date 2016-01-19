function testFunction (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    console.log({ x : x, y : y, restCount : a.length});
};
testFunction(1, 2, "hello", true, 7);
