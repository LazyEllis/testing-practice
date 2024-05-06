import calculator from "./calculator";

test("Addition with positive numbers", () => {
  expect(calculator.add(6, 3)).toBe(9);
});

test("Addition with negative numbers", () => {
  expect(calculator.add(-2, 7)).toBe(5);
});

test("Addition with decimals", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Subtraction with positive numbers", () => {
  expect(calculator.subtract(4, 9)).toBe(-5);
});

test("Subtraction with negative numbers", () => {
  expect(calculator.subtract(8, -5)).toBe(13);
});

test("Subtraction with decimals", () => {
  expect(calculator.subtract(0.5, 0.3)).toBeCloseTo(0.2);
});

test("Multiplication with positive numbers", () => {
  expect(calculator.multiply(2, 10)).toBe(20);
});

test("Multiplication with negative numbers", () => {
  expect(calculator.multiply(-3, 7)).toBe(-21);
});

test("Multiplication with decimals", () => {
  expect(calculator.multiply(8, 0.2)).toBeCloseTo(1.6);
});

test("Division with positive numbers", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test("Division with negative numbers", () => {
  expect(calculator.divide(8, -2)).toBe(-4);
});

test("Division with decimal quotients", () => {
  expect(calculator.divide(1, 4)).toBeCloseTo(0.25);
});

test("Division by zero", () => {
  expect(calculator.divide(10, 0)).toBeUndefined();
});
