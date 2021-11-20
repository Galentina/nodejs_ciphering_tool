const codeStreamA = require('./../codeStreamA');
const Transform = require('stream').Transform;

describe("codeStreamA testing", () => {
    test('should be defined', () => {
        expect(codeStreamA).toBeDefined();
    });

    let fn = jest.fn();

    let fun;
    beforeEach(() => {
        fun = new Transform();
    });

    test.each([fn]
    )('should called', (data ) => {
        codeStreamA(fn);
        expect(codeStreamA(fn)).isPrototypeOf('object');
    });

    test('should be defined', () => {
        expect(codeStreamA).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(codeStreamA()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(codeStreamA(fn) instanceof Transform ).toBe(true);
    });

    test('transform function was called', () => {
        codeStreamA(fn)._transform('','utf8', x=>x)
        expect(fn.mock.calls.length).toBe(1);
    });
});


