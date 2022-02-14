const sumAll = function(num1, num2) {

    let firstNum = 0;
    let secondNum = 0;

    if (num1 > num2) {
        firstNum = num2;
        secondNum = num1;
    }

    else if (num2 > num1) {
        firstNum = num1;
        secondNum = num2;
    }

    let answer = 0;

    for (let i = firstNum; firstNum <= secondNum; firstNum++) {
        if (firstNum < 0 || secondNum < 0) {
            answer = 'ERROR';
            break;
        }

        else if (firstNum > 0 && secondNum > 0 && typeof(firstNum) == 'number' && typeof(secondNum) == 'number'){
            answer = answer + firstNum;
        }
        else {
            answer = 'ERROR';
        }
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
