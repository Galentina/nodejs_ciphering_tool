
//________________ exit with error code_____________________

const errorExit = function(string, code) {
    process.stderr.write(`\n${string}\n`);
    console.log(`About to exit with code ${code}`);
    process.exit(code);
};
module.exports = errorExit;

