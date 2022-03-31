import {sum} from '../src/sum';

//probar
test("Test sum function 2+2 =4", () => {
    expect(sum(2,2)).toBe(4);
});
test("Test sum function 5+5 =10", () => {
    expect(sum(5,5)).toBe(10);
});