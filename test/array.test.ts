const array = [
    "val1",
    "val2",
    "val3",
];

test("Const array contains val2", () => {
    expect(array).toContain("val2");
});
test("Const array contains val2", () => {
    expect(array).toContain("val3");
});
test("Const array contains val2", () => {
    expect(array).not.toContain("val0");
});