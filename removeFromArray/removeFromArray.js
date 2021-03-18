const removeFromArray = function(arr, ...rest) {
    for (let i = 0; i < arr.length; i++) {
        for (let item of rest) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i--;
            }
        }
    }

    return arr;
}

module.exports = removeFromArray
