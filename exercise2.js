class Rectangle {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
	perimeter() {
		return 2 * (this.w + this.h);
	}
	area() {
		return this.w * this.h;
	}
}

const rectangle1 = new rectangle(3, 4);

console.log(rectangle1.perimeter());
console.log(rectangle1.area());
