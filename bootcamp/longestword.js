 function longestWord(string) {
    const words = string.split(' '); // split the string into an array of words
    let longest = words[0]; // initialize the longest word to the first word in the array
  
    // iterate over each word in the array and update the longest word if a longer word is found
    for (let i = 1; i < words.length; i++) {
      if (words[i].length >= longest.length) {
        longest = words[i];
      }
    }
  //console.log(longest)
    return longest;
  }

  export default longestWord;