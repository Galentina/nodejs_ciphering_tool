const transformStreamA = require('./../transformStreamA');

describe ('mainString testing', () => {
    test('should be defined', () => {
        expect(transformStreamA).toBeDefined();
    });

    test.each([['ABCDF', 'ZYXWU'], ['1234', '1234'], ['--ABCDF', '--ZYXWU'], ['--abcdf', '--zyxwu']]
    )('should encrypt text in the way Atbash', (data, expected) => {
        transformStreamA(data);
        expect(transformStreamA(data)).toBe(expected);
    });
});
