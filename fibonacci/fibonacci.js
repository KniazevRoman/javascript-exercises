const fibonacci = function(num) {
    if (+num <= 0) return "OOPS";

    if (+num == 1 || +num == 2) return 1;

    let fib = [1, 1];

    for (let i = 3; i <= num; i++) {
        let newFib = fib[fib.length-1]+fib[fib.length-2];
        fib.push(newFib);
    }

    return fib[fib.length-1];
}

module.exports = fibonacci
