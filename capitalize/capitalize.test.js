import capitalize from "./capitalize";

test("Capitalize empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize single letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("Capitalize single word", () => {
  expect(capitalize("jest")).toBe("Jest");
});

test("No change to already capitalized word", () => {
  expect(capitalize("JavaScript")).toBe("JavaScript");
});

test("Capitalize multiple words", () => {
  expect(capitalize("test driven development")).toBe("Test Driven Development");
});
