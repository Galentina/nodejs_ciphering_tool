
const checkStringCIO = require('./../checking/checkStringCIO');
//_____________Create a new sentence____________________

const checkString = function (string, content) {
    let res = content.split('');

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abc = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < string.length; i += 2) {

        checkStringCIO(string[i]);

        const coding = string[i + 1].split('-');
        if (coding.length > 1) {
            for (let j = 0; j < coding.length; j++) {
                let res1 = [];
                res.map(el => {
                    if (ABC.includes(el)) {
                        if (coding[j][0] === 'C') {
                            if (coding[j][1] === '1') res1.push(ABC[(ABC.indexOf(el) + 1) % 26]);
                            else {
                                (ABC.indexOf(el) - 1 >= 0) ?
                                    res1.push(ABC[ABC.indexOf(el) - 1]) : res1.push('Z')
                            }
                        }
                        if (coding[j][0] === 'R') {
                            if (coding[j][1] === '1') res1.push(ABC[(ABC.indexOf(el) + 8) % 26]);
                            else {
                                (ABC.indexOf(el) - 8 >= 0) ?
                                    res1.push(ABC[ABC.indexOf(el) - 8]) : res1.push(ABC[26 + (ABC.indexOf(el) - 8)])
                            }
                        }
                        if (coding[j][0] === 'A') res1.push(ABC[25 - ABC.indexOf(el)]);
                    } else if (abc.includes(el)) {
                        if (coding[j][0] === 'C') {
                            if (coding[j][1] === '1') res1.push(abc[(abc.indexOf(el) + 1) % 26]);
                            else {
                                (abc.indexOf(el) - 1 >= 0) ?
                                    res1.push(abc[abc.indexOf(el) - 1]) : res1.push('z')
                            }
                        }
                        if (coding[j][0] === 'R') {
                            if (coding[j][1] === '1') res1.push(abc[(abc.indexOf(el) + 8) % 26]);
                            else {
                                (abc.indexOf(el) - 8 >= 0) ?
                                    res1.push(abc[abc.indexOf(el) - 8]) : res1.push(abc[26 + (abc.indexOf(el) - 8)])
                            }
                        }
                        if (coding[j][0] === 'A') res1.push(abc[25 - abc.indexOf(el)]);
                    } else {
                        res1.push(el)
                    }
                });
                res = res1;
            }
        }
    }
    return res.join('');
}

module.exports = checkString;
