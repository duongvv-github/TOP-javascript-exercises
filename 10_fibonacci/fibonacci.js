const fibonacci = function(inputInt) {
    let fibonacciArray = [1, 1]
    let index = 1

    if(inputInt == 0){
        return 0
    }
    if(inputInt < 0){
        return "OOPS"
    }

    while(fibonacciArray.length < inputInt){
        fibonacciArray[index+1] = fibonacciArray[index] + fibonacciArray[index-1]
        index++
    }
    return fibonacciArray[inputInt-1]
    // return fibonacciArray
};

// Do not edit below this line
module.exports = fibonacci;
