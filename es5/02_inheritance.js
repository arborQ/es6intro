var Shape = function (width, height) {
    this.width = width;
    this.height = height;
};

var Square = function (size) {
    Shape.call(this, size, size);
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

var myShape = new Square(100);

console.log(myShape);
