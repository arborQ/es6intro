'use strict'

class Shape{
  constructor(x, y){
    this.width = x;
    this.height = y;
  }

  get name (){
    return 'shapre name';
  }

  set name(newName){
    alert('cant set ' + newName);
  }
}

var myShape = new Shape(10, 10);
myShape.name = 'new name';
console.log(myShape);
