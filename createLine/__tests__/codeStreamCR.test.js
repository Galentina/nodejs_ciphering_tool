const codeStreamCR = require('./../codeStreamA');
const Transform = require('stream').Transform;

describe("codeStreamA testing", () => {
    test('should be defined', () => {
        expect(codeStreamCR).toBeDefined();
    });

    let fn = jest.fn();
    let fn1 = jest.fn();
    let fun;
    beforeEach(() => {
        fun = new Transform();
    });

    test.each([fn]
    )('should called', (data ) => {
        codeStreamCR(fn);
        expect(codeStreamCR(fn)).isPrototypeOf('object');
    });

    test('should be defined', () => {
        expect(codeStreamCR).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(codeStreamCR()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(codeStreamCR(fn) instanceof Transform ).toBe(true);
    });

    test('transform function was called', () => {
        codeStreamCR(fn)._transform('','utf8', x=>x)
        expect(fn.mock.calls.length).toBe(1);
    });
});


