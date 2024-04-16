const palindromes = function (inputStr) {
    inputStr = inputStr.toLowerCase().replace(/\W/g, '')
    if(inputStr.split("").toString() == inputStr.split("").reverse().toString()){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
