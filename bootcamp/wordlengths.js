// This function takes a string as input and returns the total count of characters in all the words in the string.
 function wordLengths(string) {
    const words = string.split(' '); // split the string into an array of words
    let count = 0;
  
    // iterate over each word in the array and add its length to the count
    for (let i = 0; i < words.length; i++) {
      count += words[i].length;
    }
  
    return count;
  }

  export default wordLengths;