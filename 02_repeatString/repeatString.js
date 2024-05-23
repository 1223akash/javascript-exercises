const repeatString = function(str, frequency) {
    let result = "";
    if (frequency < 0) return "ERROR";
    for (let i = 1; i <= frequency; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
