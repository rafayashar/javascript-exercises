const reverseString = function(String) {
    let strLength = String.length;
    let reverse= '';

    while (strLength >= 0) {
        reverse = reverse + String.charAt(strLength);
        strLength--;
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
