const palindromes = function(str) {
    str.toLowerCase();

    let arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " " || arr[i] == '.'  || arr[i] == ',' || arr[i] == "?" || arr[i] == "!") {
            arr.splice(i, 1);
            i--;
        }
    }

    let reversedArr = str.toLowerCase().split('').reverse();
    for (let i = 0; i < reversedArr.length; i++) {
        if (reversedArr[i] == " " || reversedArr[i] == '.'  || reversedArr[i] == ',' || reversedArr[i] == "?" || reversedArr[i] == "!") {
            reversedArr.splice(i, 1);
            i--;
        }
    }

    return (arr.join('') == reversedArr.join(''));
}

module.exports = palindromes
