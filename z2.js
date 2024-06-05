class Rectangle {
    constructor(color, width, height) {
        this.color = color;
        this._width = width;
        this._height = height;
    }

    static getShapeType() {
        return "Rectangle";
    }

    getWidth() {
        return this._width;
    }

    setWidth(width) {
        this._width = width;
    }

    getHeight() {
        return this._height;
    }

    setHeight(height) {
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }

    describe() {
        console.log(`Color: ${this.color}, Width: ${this._width}, Height: ${this._height}`);
    }
}


const rectangle1 = new Rectangle("red", 5, 10);
const rectangle2 = new Rectangle("blue", 8, 12);


console.log(Rectangle.getShapeType()); 
console.log(rectangle1.getArea());     
rectangle1.describe();                  
console.log(rectangle2.getArea());     
rectangle2.describe();     