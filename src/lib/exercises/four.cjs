function checkIfTheFirstLetterIsUppercase(string) { 
  const [firstLetter] = string;
  return firstLetter === firstLetter.toUpperCase();
} 

console.assert(checkIfTheFirstLetterIsUppercase('Brasil') === true, 'Brasil should be true');
console.assert(checkIfTheFirstLetterIsUppercase('mobiauto') === false, 'mobiauto should be masked as false');
console.assert(checkIfTheFirstLetterIsUppercase('xXx xXx') === false, 'xXx xXx should be false');
console.assert(checkIfTheFirstLetterIsUppercase('xDD') === false, 'xDD should be false');
console.assert(checkIfTheFirstLetterIsUppercase('Deu Certo!') === true, 'Deu Certo! should be true');

module.exports = checkIfTheFirstLetterIsUppercase; 
            