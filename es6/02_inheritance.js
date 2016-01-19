'use strict'
class Shape {
  constructor(width, height) {
      this.width = width;
      this.height = height;
  }
}
class Square extends Shape{
  constructor(size){
    super(size, size);
  }
}

var myShape = new Square(100);

console.log(myShape);
