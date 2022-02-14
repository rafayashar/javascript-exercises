const repeatString = function(string, num) {
    let str2 = '';

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            str2 = str2.concat(string)
        }
    }
    else {
        str2 = 'ERROR';
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
