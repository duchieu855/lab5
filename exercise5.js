class operators {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	sum() {
		return this.a + this.b;
	}
	receive() {
		return this.a * this.b;
	}
	subtract() {
		return this.a - this.b;
	}
	divide() {
		return this.a / this.b;
	}
}

const add = new operators(6, 3);

console.log(add);
console.log(add.receive());
console.log(add.divide());
console.log(add.sum());
console.log(add.subtract());
