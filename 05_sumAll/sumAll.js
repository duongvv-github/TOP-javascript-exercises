const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) === false ||  Number.isInteger(int2) === false || int1 < 0 || int2 < 0){
        return "ERROR"
    }
    if (int1 > int2){
        // if int1 is larger than int2
        [int1, int2] = [int2, int1]
    }
    let returnSum = 0
    for(let i = int1; i <= int2; i++){
        returnSum = returnSum + i
    }
    return returnSum
};

// Do not edit below this line
module.exports = sumAll;
