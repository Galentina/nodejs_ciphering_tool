const fs = require('fs');
const path = require('path');
const checkString = require('./createLine/newLine');
const checkMainString = require('./checking/checkMainString');

const fileInput = path.join(__dirname, 'input.txt');
const fileOutput = path.join(__dirname, 'output.txt');
const mainString = process.argv.slice(2);

//________________ check mainString_____________________

const resMainString = mainString.map(el => (el === '--config') ? el ='-c' : el);
checkMainString(resMainString);


//____________________Main function____________________

const rewriteText = function (fileInput){

    fs.readFile(fileInput, 'utf8', (err, content) => {

        const data = checkString(resMainString, content);

        if (!fileOutput) {
            fs.writeFile(fileOutput, data, err => {
                if (err) {
                    console.log('error')
                }
            });
        } else {
            fs.appendFile(fileOutput, data, err => {
                if (err) {
                    console.log('error')
                }
            });
        }
    });
};

rewriteText(fileInput);
