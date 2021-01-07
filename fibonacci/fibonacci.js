const fibonacci = function(index) {
    let first = 0;
    let second = 1;
    let fibonacciTotal = 1;
    if (index < 1) {
        return "OOPS";
    }
    for (var i = 1; i < index; i++) {
        fibonacciTotal = first + second;
        first = second;
        second = fibonacciTotal;
    }
    return fibonacciTotal
}

module.exports = fibonacci
