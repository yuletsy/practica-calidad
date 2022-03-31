import {sum} from '../src/sum';


test("Test sum 5+5 th greater than 5 ", () => {
    expect(sum(5,5)).toBeGreaterThan(5);
});
test("Test sum 5+5 th greater than or equal 5 ", () => {
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);
});
test("Test sum 5+5 th greater than or equal 5 ", () => {
    expect(sum(2,1)).toBeLessThan(4);
});