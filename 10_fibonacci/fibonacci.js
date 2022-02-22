const fibonacci = function(num) {
    let answer;
    num = parseInt(num);

    if (num < 0) {
        answer = 'OOPS';
    }
    else {    
        switch (num) {
            case 0:
                answer = 0;
                break;
            case 1:
                answer = 1;
                break;
            default:
                let a = 0;
                let b = 1;

                for (let i = 2; i <= num; i++) {

                    answer = a + b;
                    a = b;
                    b = answer;
                }
        }
    };
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
