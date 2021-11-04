const fs = require('fs');
const path = require('path');
const fileInput = path.join(__dirname, 'input.txt');

console.log('File is not found');
process.stdout.write('Please write your sentence here > ');
process.stdin.on('data', function(data) {
    fs.writeFile(fileInput, data, err => {
        if (err) {
            console.log('error')
        }
    });
})

