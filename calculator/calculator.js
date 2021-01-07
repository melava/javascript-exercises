function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

function multiply (arr) {
	let total = 1;
	for(let i = 0; i < arr.length; i++) {
	total *= arr[i]
	}
	return total
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
	let total = 1
	for(let i = a; i > 0; i--) {
		total *= i
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}