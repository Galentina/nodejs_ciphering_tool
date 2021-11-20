const checkStringCIO = require('./../checkStringCIO');

describe ('string -c-i-o testing', () =>{
    test('should be defined', () => {
        expect(checkStringCIO).toBeDefined();
    });
    let fn = jest.fn();

    const con = '-m';
    const con1 = '-i';
    const string = `Path mark -m is not valid, or is not in the right place`;

    test.each([con]
    )('should called', (data ) => {
        checkStringCIO(data, fn);
        expect(fn).toBeCalled();
    });

    test.each([con]
    )('should called', (data ) => {
        checkStringCIO(data, fn);
        expect(fn).toBeCalledWith(string, 6);
    });

    test.each([con1]
    )('should called', (data ) => {
        checkStringCIO(data, fn);
        expect(fn).toBeTruthy();
    });
});
