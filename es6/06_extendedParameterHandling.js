function testFunction (x, y, ...a) {
    console.log({ x : x, y : y, restCount : a.length});
};
testFunction(1, 2, "hello", true, 7);
