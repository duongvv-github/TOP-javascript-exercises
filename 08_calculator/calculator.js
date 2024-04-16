const add = function(int1, int2) {
	return int1 + int2
};

const subtract = function(int1, int2) {
	return int1 - int2
};

const sum = function(inputArray) {
	let returnValue = 0
  for(let i=0; i<inputArray.length; i++){
    returnValue = returnValue + inputArray[i]
  }
  return returnValue
};

const multiply = function(inputArray) {
	let returnValue = 1
  for(let i=0; i<inputArray.length; i++){
    returnValue = returnValue * inputArray[i]
  }
  return returnValue
};

const power = function(int1, int2) {
	return int1**int2
};

const factorial = function(inputInt) {
	let returnValue = 1
  for(let i=inputInt; i>1; --i){
    returnValue = returnValue * i
  }
  return returnValue
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
