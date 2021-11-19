const codeStreamA = require('./../codeStreamA');
const Transform = require('stream').Transform;
const { PassThrough } = require('stream')

describe("codeStreamA testing", () => {
    test('should be defined', () => {
        expect(codeStreamA).toBeDefined();
    });

    let fn = jest.fn();
    let fn1 = jest.fn();
    let fun;
    beforeEach(() => {
        fun = new Transform();
    });

    test.each([fn]
    )('should called', (data ) => {
        codeStreamA(fn);
        expect(codeStreamA(fn)).isPrototypeOf('object');
    });

})
