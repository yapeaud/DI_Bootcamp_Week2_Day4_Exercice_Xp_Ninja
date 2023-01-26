/*Exercise 5: Unique Elements
  Instructions
  Write a JS function that takes an array and returns a new array with only unique elements. */
  
  const uniqueElements = (array) => {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != array[i + 1]) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));