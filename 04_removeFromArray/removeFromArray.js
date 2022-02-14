const removeFromArray = function(array, ...arg) {
    
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < arg.length; j++) {

            if (array[i] === arg[j]) {
                array.splice(i, 1);
                i = 0;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
