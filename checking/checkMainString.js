//________________ check mainString_____________________

const errorExit = require('./errorExit');

const checkMainString = function (mainString) {

    if (mainString[0] !== '-c') {
        errorExit('Config option is not presented or presented wrongly', 1);
    }
    if (mainString) {
        const config = mainString[mainString.indexOf('-c') + 1].split('-');
        const res = config.every(el => /^A$|^[C|R][0|1]$/.test(el));
        if (!res) errorExit('Config is not valid. Please check.', 2);
    }
    if (mainString.indexOf('-c') !== mainString.lastIndexOf('-c')) {
        errorExit('Config option is duplicated', 3);
    }
    if (!mainString.includes('./input.txt') || !mainString.includes('./output.txt')) {
        errorExit('Request is not complete, please check', 4)
    }
    else return true;
};

module.exports = checkMainString;

