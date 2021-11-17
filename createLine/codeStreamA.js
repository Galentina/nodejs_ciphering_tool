const Transform = require('stream').Transform;

const codeStreamA = (func) => {

    return new Transform({
        transform(chunk, encoding, callback) {
            const data = func(chunk.toString());
            callback(null, data);
        }
    })
}

module.exports = codeStreamA;
