let string;
let iteration;

const repeatString = function(string, iteration) {
    let newString = '';
    if (iteration < 0) {
        newString = 'ERROR';
    }
    for (let i = 0; i < iteration; i++) {
        newString += string;
    }
    return newString
}

module.exports = repeatString
