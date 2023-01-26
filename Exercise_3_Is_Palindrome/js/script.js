/*Exercise 3 : Is Palindrome?
  Instructions
  Write a JavaScript function that checks whether a string is a palindrome or not.
  Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.*/
  
  const isPalindrome = (word) => {
    let reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isPalindrome("madam"));