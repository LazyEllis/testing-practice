const analyzeArray = (array) =>
  array.length < 1
    ? {
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0,
      }
    : {
        average:
          array.reduce((prev, current) => prev + current, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
      };

export default analyzeArray;
