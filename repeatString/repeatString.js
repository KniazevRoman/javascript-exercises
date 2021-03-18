const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return 'ERROR';
    } 

    let result = '';

    for (let i = 0; i < repeats; i++) {
        result += string;
    }

    return result;
}

module.exports = repeatString
