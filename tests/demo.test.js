
//sum.js -> code to be tested
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

//-------------------

//sum.test.js

describe("Summation Tests", () => {
    test('add 1 + 2 to equals 3',() => {
        //arrange and act
        var result = sum(1, 2)
        //assert
        expect(result).toBe(3);
        //expect(actual output).toBe(expected output);
    });
    
    test('add 4 + 5 not equals to 12',() => {
        expect(sum(4, 5)).not.toBe(12);
    });
})

describe("Subtraction Tests", () => {
    test('substract 5 - 1 equals to 4', () => {
        expect(subtract(5, 1)).toBe(4);
    })
})

//Jest Matchers

test("equality matchers", () => {
    expect(2*2).toBe(4);
    expect(4-2).not.toBe(1);

    var name = "Algocamp";
    var n = null;

    expect(n).toBeNull();

    expect(name).toBeTruthy();
   // expect(n).toBeTruthy();

    expect(0).toBeFalsy();
})

test("number matchers", () => {

    var n1 = 100;
    var n2 = -20;
    var n3 = 0;

    expect(n1).toBeGreaterThan(10);
    expect(n2).toBeLessThanOrEqual(0);

})

test("string matchers", () => {

    var string1 = "algocamp is a great resource";

    expect(string1).toMatch(/great/);
    expect(string1).not.toMatch(/abc/);

})


describe("Hooks Testing", () => {

    var in1 = 2;
    var in2 = 5;

    beforeAll(() => {
        console.log("before all called");
    });

    afterAll(() => {
        console.log("after all called")
    });

    beforeEach(() => {
        console.log("before each called");
        in1 = 1;
        in2 = 2;
    });

    afterEach(() => {
        console.log("afterEach called");
    });

    test('subtract 1 - 2 should return -1', () => {

        var result = subtract(in1, in2);
        expect(result).toBe(-1);
    });

    test('adding 1 + 2 should return 3', () => {

        var result = sum(in1, in2);
        expect(result).toBe(3);
    });
})
