function checkIfTheFirstLetterIsUppercase(string) {
  const [firstLetter] = string;
  return firstLetter === firstLetter.toUpperCase();
}

module.exports = checkIfTheFirstLetterIsUppercase;
