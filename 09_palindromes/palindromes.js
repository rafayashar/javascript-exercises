const palindromes = function (string) {
    let str = string.toLowerCase().replace(/[^a-z]/g, '');
    return (str.split('').reverse().join('') == str);}

// Do not edit below this line
module.exports = palindromes;
