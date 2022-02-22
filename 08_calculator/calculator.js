const add = function(a, b) {
  return (a+b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(array) {
  return array.reduce((total, current) => {
    return total + current;
  }, 0);
  };

const multiply = function(array) {
  return array.reduce((product, current) => {
    return product * current;
  }, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  }

  else {
    let product = 1;
    while (a > 0) {
      product = product * a;
      a--;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
