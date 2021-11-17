
//_____________Create a new sentence bij Caesar process____________________

const transformStreamC = function (content, data) {
    let res = content.split('');

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abc = 'abcdefghijklmnopqrstuvwxyz'

    let res1 = [];
    res.map(el => {
        if (!ABC.includes(el) && !abc.includes(el)) res1.push(el);
        else {
            const alpha = ABC.includes(el) ? ABC : abc;
            if (Number(data[1]) === 1) res1.push(alpha[(alpha.indexOf(el) + 1) % 26]);
            else {
                (alpha.indexOf(el) - 1 >= 0) ?
                    res1.push(alpha[alpha.indexOf(el) - 1]) : res1.push(alpha[alpha.length-1])
            }
        }
    });
    return res1.join('');
}

module.exports = transformStreamC;
