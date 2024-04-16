const removeFromArray = function(inputArray, ...intsToRemove) {
    for (let i = 0; i < intsToRemove.length; i++){
        var intToRemove = intsToRemove[i]
        do{
            var indexToRemove = inputArray.indexOf(intToRemove);
            if (indexToRemove > -1) {
                inputArray .splice(indexToRemove, 1)
            }
        } while(inputArray.indexOf(intToRemove)!=-1)
    }
    return inputArray
}
// Do not edit below this line
module.exports = removeFromArray;
