const Transform = require('stream').Transform;

const codeStreamCR = (func, code) => {

    return new Transform({
        transform(chunk, encoding, callback) {
            const data = func(chunk.toString(), code);
            callback(null, data);
        }
    })
}

module.exports = codeStreamCR;

