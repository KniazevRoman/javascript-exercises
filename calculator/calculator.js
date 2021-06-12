function add (a, b) {
	return +a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (arr) {
	let result = 0;
    for (let data of arr) {
        result += data;
    }
    return result;
}

function multiply (arr) {
	let result = arr[0];
    for  (let i = 1; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

function power(a, b) {
	return a**b;
}

function factorial(num) {
    if (num == 0) return 1;
    
	let result = 1; 
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}