//________________ check mainString_____________________

const errorExit = require('./errorExit');

const checkMainString = function (mainString) {

    if (!mainString.includes('-c')) {
        errorExit('Config option is not presented or presented wrongly', 1);
    }
    if (mainString.indexOf('-c') !== mainString.lastIndexOf('-c')
    || mainString.indexOf('-i') !== mainString.lastIndexOf('-i')
    || mainString.indexOf('-o') !== mainString.lastIndexOf('-o')) {
        errorExit('One of config options is duplicated', 2);
    }
    if ((mainString.includes('-o') && !mainString.includes('./output.txt')) ||
        (mainString.includes('-i') && !mainString.includes('./input.txt'))) {
        errorExit(`Config line is not complete. Please check`, 3);
    }
    if ((!mainString.includes('-o') && mainString.includes('./output.txt')) ||
        (!mainString.includes('-i') && mainString.includes('./input.txt'))) {
        errorExit(`Config line is not complete. Please check`, 4);
    }
    if (mainString) {
        const config = mainString[mainString.indexOf('-c') + 1].split('-');
        const res = config.every(el => /^A$|^[C|R][0|1]$/.test(el));
        if (!res) errorExit('Config is not valid. Please check.', 5);
    }

    else return true;
};

module.exports = checkMainString;

