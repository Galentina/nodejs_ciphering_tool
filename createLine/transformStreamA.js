
//_____________Create a new sentence bij Atbash process____________________

const transformStreamA = function (content) {
    let res = content.split('');

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const abc = 'abcdefghijklmnopqrstuvwxyz'

    let res1 = [];
    res.map(el => {
        if (!ABC.includes(el) && !abc.includes(el)) res1.push(el);
        else {
            const alpha = ABC.includes(el) ? ABC : abc;
            res1.push(alpha[25 - alpha.indexOf(el)]);
        }
    });
    return res1.join('');
}

module.exports = transformStreamA;
