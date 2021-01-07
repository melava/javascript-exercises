const palindromes = function(string) {
    string = string.toLowerCase().replace(/[^a-z]+/g,'').split('');
    let arr = string.toString();
    let pal = string.reverse().toString();

    return arr === pal
}

module.exports = palindromes
