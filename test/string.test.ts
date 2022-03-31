const text = "UNAC";

test("UNAC contains UN ", () => {
    expect(text).toMatch(/UN/);
});

test("UNAC contains UN ", () => {
    expect(text).not.toMatch(/P/);
});