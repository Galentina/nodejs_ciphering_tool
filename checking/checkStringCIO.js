//________________ check -c -i -o is presented_____________________

const errorExit = require('./errorExit');

const checkStringCIO = function (letter) {
    const keys = ['-c', '-i', '-o'];
    if (!keys.includes(letter)) {
        errorExit(`Path mark ${letter} is not valid, or is not in the right place`, 6);
    }
    else return true;
}

module.exports = checkStringCIO;
