const caesar = function(string, index) {
    let str = string.split('');
    let encryptedString = '';
    if (index > 26 || index < -26) {
    	index = index % 26;
    }
    str.forEach(letter => {
        let code = letter.charCodeAt();
        let indexedCode = code;
        if (code >= 97 && code <= 122) {
            indexedCode = code + index;
            if (indexedCode > 122) {
                indexedCode -= 26;
            }
            if (indexedCode < 97) {
                indexedCode += 26;
            }
        } else if (code >= 65 && code <= 90) {
            indexedCode = code + index;
            if (indexedCode > 90) {
                indexedCode -= 26;
            }
            if (indexedCode < 65) {
                indexedCode += 26;
            }
        } 
        letter = String.fromCharCode(indexedCode);
        encryptedString += letter;
    });
    return encryptedString
    
}

module.exports = caesar
