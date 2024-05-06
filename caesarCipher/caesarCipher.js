const populateSmallLetters = () => {
  const alphabet = [];
  for (let index = 0; index < 26; index++) {
    alphabet.push(String.fromCharCode(97 + index));
  }
  return alphabet;
};

const populateCapitalLetters = () => {
  const alphabet = [];
  for (let index = 0; index < 26; index++) {
    alphabet.push(String.fromCharCode(65 + index));
  }
  return alphabet;
};

const smallLetters = populateSmallLetters();
const capitalLetters = populateCapitalLetters();

const caesarCipher = (string, shiftFactor) =>
  string
    .split("")
    .map((character) => {
      if (
        !smallLetters.includes(character) &&
        !capitalLetters.includes(character)
      )
        return character;

      return smallLetters.includes(character)
        ? smallLetters.at((smallLetters.indexOf(character) + shiftFactor) % 26)
        : capitalLetters.at(
            (capitalLetters.indexOf(character) + shiftFactor) % 26
          );
    })
    .join("");

export default caesarCipher;
