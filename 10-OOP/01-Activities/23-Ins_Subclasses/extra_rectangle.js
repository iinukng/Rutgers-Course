const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }

  printInfo() {
    super.printInfo();
    console.log(`sideA: ${this.sideA}`);
    console.log(`sideB: ${this.sideB}`);
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
