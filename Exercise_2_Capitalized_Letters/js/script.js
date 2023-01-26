/*Exercise 2: Capitalized Letters
  Instructions
  Create a function that takes a string as an argument.
  Have the function return:
  The string but all letters in even indexes should be capitalized.
  The string but all letters in odd indexes should be capitalized.
  Note:
  Index 0 will be considered even.
  The argument of the function should be a lowercase string with no spaces. */
  
  const capitalize = (word) => {
    let tabWord = word.split("");
    let tabWordEven = [];
    let tabWordAdd = [];
    for (let i = 0; i < tabWord.length; i++) {
      if (i % 2 == 0 || i == 0) {
        tabWordEven[i] = tabWord[i].toUpperCase();
      } else {
        tabWordEven[i] = tabWord[i].toLowerCase();
      }
      if (i % 2 == 0 || i == 0) {
        tabWordAdd[i] = tabWord[i].toLowerCase();
      } else {
        tabWordAdd[i] = tabWord[i].toUpperCase();
      }
    }
    tabWord = [tabWordAdd.join(""), tabWordEven.join("")];
    return tabWord;
  }
  
  console.log(capitalize("hello"));
  