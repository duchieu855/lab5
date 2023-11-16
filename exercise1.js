function add(...args) {
	let sum = 0;
	for (let arg of args) {
		console.log(arg);
		sum += arg;
	}
	return sum;
}

const sum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 5);
console.log(sum);
