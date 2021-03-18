const sumAll = function(a, b) {
    let result = 0;

    if(a < 0 || b < 0 ) {
        return "ERROR";
    }

    if (!(typeof a === 'number') || !(typeof b === 'number')) {
        return "ERROR";
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    }

    if (a > b) {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    }

    return result;
}

module.exports = sumAll
