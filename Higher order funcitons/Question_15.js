function getCharacterFrequency(str) {
  return str
    .trim()                        // Remove leading/trailing spaces
    .toLowerCase()                // Convert to lowercase
    .split('')                    // Convert string to array of characters
    .reduce((acc, char) => {
      if (char !== ' ') {       
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
}


console.log(getCharacterFrequency(" Hello World! "));


 
