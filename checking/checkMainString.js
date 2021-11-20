//________________ check mainString_____________________


const checkMainString = function (mainString, errorExit) {
    const config = mainString[mainString.indexOf('-c') + 1].split('-');
    const res = config.every(el => /^A$|^[C|R][0|1]$/.test(el));
    if (!mainString.includes('-c')) {
        return errorExit('Config option is not presented or presented wrongly', 1);
    }
    else if (mainString.indexOf('-c') !== mainString.lastIndexOf('-c')
    || mainString.indexOf('-i') !== mainString.lastIndexOf('-i')
    || mainString.indexOf('-o') !== mainString.lastIndexOf('-o')) {
        return errorExit('One of config options is duplicated', 2);
    }
    else if ((mainString.includes('-o') && !mainString.includes('./output.txt'))
        || (mainString.includes('-i') && !mainString.includes('./input.txt'))) {
        return errorExit(`Config line is not complete. Please check`, 3);
    }
    else if ((!mainString.includes('-o') && mainString.includes('./output.txt')) ||
        (!mainString.includes('-i') && mainString.includes('./input.txt'))) {
        return errorExit(`Config line is not complete. Please check`, 4);
    }
    else if (res === false && mainString) {
        return errorExit('Config is not valid. Please check.', 5);
    }
    else return true;
};

module.exports = checkMainString;

