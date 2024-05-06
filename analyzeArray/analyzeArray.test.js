import analyzeArray from "./analyzeArray";

test("Analyze an array with a single value", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("Analyze an array with two values", () => {
  expect(analyzeArray([2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("Analyze an array with decimal average", () => {
  expect(analyzeArray([3, 8])).toEqual({
    average: 5.5,
    min: 3,
    max: 8,
    length: 2,
  });
});

test("Analyze an array with multiple values", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze an empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("Analyze an array with negative numbers", () => {
  expect(analyzeArray([-5, 0, 3, -2, 7])).toEqual({
    average: 0.6,
    min: -5,
    max: 7,
    length: 5,
  });
});

test("Analyze an array with duplicate numbers", () => {
  expect(analyzeArray([1, 2, 3, 3, 4, 5, 5])).toEqual({
    average: 3.2857142857142856,
    min: 1,
    max: 5,
    length: 7,
  });
});

test("Analyze an array with floating-point numbers", () => {
  expect(analyzeArray([1.5, 2.3, 4.7, 3.2])).toEqual({
    average: 2.925,
    min: 1.5,
    max: 4.7,
    length: 4,
  });
});
