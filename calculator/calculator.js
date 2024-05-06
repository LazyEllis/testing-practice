const createCalculator = () => {
  const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
  const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
  const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
  const divide = (firstNumber, secondNumber) =>
    secondNumber === 0 ? undefined : firstNumber / secondNumber;

  return { add, subtract, multiply, divide };
};

const calculator = createCalculator();

export default calculator;
