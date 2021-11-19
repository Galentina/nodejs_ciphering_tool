const errorExit = require('./../errorExit');

describe ('exit function testing', (arg) =>{
    test('should be defined', () => {
        expect(errorExit).toBeDefined();
    });

    const data = 'Config line is not complete. Please check';
    const code = 4;

    test('tests myFunc with process.exit', async () => {
        console.log = jest.fn();
        process.stderr.write = jest.fn();
        const mockExit = jest.spyOn(process, 'exit')
            .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
        expect(() => {
            errorExit(data, code);
        }).toThrow();
        expect(process.stderr.write).toHaveBeenCalledWith(`\n${data}\n`);
        expect(console.log).toHaveBeenCalledWith('About to exit with code 4');
        expect(mockExit).toHaveBeenCalledWith(code);
        mockExit.mockRestore();
    });
});
