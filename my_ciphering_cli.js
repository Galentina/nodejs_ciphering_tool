const fs = require('fs');
const { pipeline } = require('stream');
const checkMainString = require('./checking/checkMainString');
const errorExit = require("./checking/errorExit");
const checkStringCIO = require("./checking/checkStringCIO");
const transformStreamC = require("./createLine/transformStreamC");
const transformStreamR = require("./createLine/transformStreamR");
const transformStreamA = require("./createLine/transformStreamA");
const codeStreamCR = require("./createLine/codeStreamCR");
const codeStreamA = require("./createLine/codeStreamA");

const mainString = process.argv.slice(2);

//________________ check mainString_____________________

const resMainString = mainString.map(el => {
    (el === '--config') ? el = '-c' : el;
    (el === '--input') ? el = '-i' : el;
    (el === '--output') ? el = '-o' : el;
    return el;
});

checkMainString(resMainString);
for (let i = 0; i < resMainString.length; i += 2) {
    checkStringCIO(resMainString[i]);
}


//____________________Main function____________________

const rewriteText = function (){

    const coding = resMainString[resMainString.indexOf('-c') + 1].split('-');
    // console.log(coding);

    const input = resMainString.includes('-i') ? resMainString[resMainString.indexOf('-i')+1] : '';
    const output = resMainString.includes('-o') ? resMainString[resMainString.indexOf('-o')+1] : '';

    fs.statSync(output, (err) => {
        if (err) {
            errorExit(`File ${output} not found`, 7)
        }
    })

    const readStream = input ? fs.createReadStream(input, 'utf8') : process.stdin;

    const transformStreamCRA = coding.map(el => el[0] === 'C'
        ? codeStreamCR(transformStreamC, el) : el[0] === 'R'
            ? codeStreamCR(transformStreamR, el) : codeStreamA(transformStreamA, el))

    const writeStream = output !=='' ? fs.createWriteStream(output, {'flags': 'a'}) : process.stdout;

    pipeline( readStream, ...transformStreamCRA, writeStream, err => {
        if (err) errorExit(`Error: File ${err.path} not found`, 8)
    })


};

rewriteText();
