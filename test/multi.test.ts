const n = null;
const number = 0;
const notTruthy = false;
const notFalsy = true;


test("Test n to be null", () => {
    expect(n).toBeNull();
});

test("Test n to be null", () => {
    expect(n).toBeDefined();
});

test("Test n to be null", () => {
    expect(notTruthy).toBeFalsy();
});

test("Test n to be null", () => {
    expect(notFalsy).toBeTruthy();
});