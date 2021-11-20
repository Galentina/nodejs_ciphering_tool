const checkMainString = require('./../checkMainString');

describe ('mainString testing', () =>{
    test('should be defined', () => {
        expect(checkMainString).toBeDefined();
    });



    let fn = jest.fn();

    const arg1 = ["'-i' './input.txt' '-o' './output.txt'"];
    const string1 = 'Config option is not presented or presented wrongly';
    const arg2 = ["'-c' 'C1' '-c' 'C0' '-i' './input.txt' '-o' './output.txt'"];
    const string2 = 'One of config options is duplicated';
    const arg3 = ["'-c' 'C1-R1-C0-C0-A-R0-R1-R1-A-C1' '-i' '-o' './output.txt'"];
    const string3 = `Config line is not complete. Please check`;
    const arg4 = ["'-c' 'C1-R1-C0-C0-A-R0-R1-R1-A-C1' '-i' './input.txt' './output.txt'"];
    const string4 = `Config line is not complete. Please check`;
    const arg5 = ["'-c' 'C1-R1-C0-C0-A-R0-R1-R1C1' '-i' './input.txt' '-o' './output.txt'"];
    const string5 = 'Config is not valid. Please check.';
    const arg6 = ["'-c' 'C1-R1-C0-C0-A-R0-R1-R1-A-C1' '-i' './input.txt' '-o' './output.txt'"];

    test.each([arg1, arg2, arg3, arg4, arg5, arg6]
    )('should called', (data ) => {
        checkMainString(data, fn);
        expect(fn).toBeCalled();
    });

    test.each([arg1]
    ) ('should call FN with 2 arguments: string1, 1', (data) => {
        checkMainString(data, fn);
        expect(fn).toBeCalledWith(string1, 1);
    })

    test.each([arg2]) ('should call FN with 2 arguments: string2, 2', (data) => {
        checkMainString(data, fn);
        expect(fn).toBeCalledWith(string2, 2);
    });

    test.each([arg3]
    ) ('should call FN with 2 arguments: string3, 3', (data, ) => {
        checkMainString(data, fn);
        expect(fn).toBeCalledWith(string3, 3);
    });
    //
    test.each([arg4]
    ) ('should call FN with 2 arguments: string4, 4', (data) => {
        checkMainString(data, fn);
        expect(fn).toBeCalledWith(string4, 4);
    });

    test.each([arg5]
    ) ('should call FN with 2 arguments: string5, 5', (data) => {
        checkMainString(data, fn);
        expect(fn).toBeCalledWith(string5, 5);
    });

    test.each([arg6]
    ) ('should return true', (data) => {
        checkMainString(data, fn);
        expect(checkMainString).toBeTruthy();
    })

    test.each([arg1, arg2, arg3, arg4, arg5]
    ) ('should return true', (data) => {
        checkMainString(data,fn);
        expect(fn).toHaveReturnedWith(undefined);
    })
})
