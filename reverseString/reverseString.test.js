import reverseString from "./reverseString";

test("Reverse single letter", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reverse single word", () => {
  expect(reverseString("ESLint")).toBe("tniLSE");
});

test("Reverse multiple words", () => {
  expect(reverseString("Prettier Formatter")).toBe("rettamroF reitterP");
});

test("Reverse string with punctuation", () => {
  expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
});

test("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});
