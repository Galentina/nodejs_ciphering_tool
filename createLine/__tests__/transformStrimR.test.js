const transformStreamR = require('./../transformStreamR');

describe ('mainString testing', () => {
    test('should be defined', () => {
        expect(transformStreamR).toBeDefined();
    });

    test.each([['ABCDF', 'IJKLN'], ['1234', '1234'], ['--ABCDF', '--IJKLN'], ['--abcdf', '--ijkln']]
    )('should encrypt text in the way Atbash', (data, expected) => {
        transformStreamR(data, 'R1');
        expect(transformStreamR(data, 'R1')).toBe(expected);
    });

    test.each([
        ['ABCDF', 'STUVX'], ['1234', '1234'], ['--ABCDF', '--STUVX'], ['--abcdf', '--stuvx'], ['"_"IJI', '"_"ABA']
        ]
    )('should encrypt text in the way Atbash', (data, expected) => {
        transformStreamR(data, 'R0');
        expect(transformStreamR(data, 'R0')).toBe(expected);
    });
});
