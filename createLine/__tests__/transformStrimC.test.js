const transformStreamC = require('./../transformStreamC');

describe ('mainString testing', () => {
    test('should be defined', () => {
        expect(transformStreamC).toBeDefined();
    });

    test.each([['ABCDF', 'BCDEG'], ['1234', '1234'], ['--ABCDF', '--BCDEG'], ['--abcdf', '--bcdeg']]
    )('should encrypt text in the way Atbash', (data, expected) => {
        transformStreamC(data, 'C1');
        expect(transformStreamC(data, 'C1')).toBe(expected);
    });

    test.each([['ABCDF', 'ZABCE'], ['1234', '1234'], ['--ABCDF', '--ZABCE'], ['--abcdf', '--zabce']]
    )('should encrypt text in the way Atbash', (data, expected) => {
        transformStreamC(data, 'C0');
        expect(transformStreamC(data, 'C0')).toBe(expected);
    });
});
