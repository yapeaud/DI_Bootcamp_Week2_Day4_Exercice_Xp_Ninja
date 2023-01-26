/*Exercise 4 : Biggest Number
  Instructions
  Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
  Note : This function should work with any array; */
  
  const biggestNumberInArray = (arrayNumber) => {
    let biggestNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (isNaN(arrayNumber[i])) {
        continue;
      }
      if (arrayNumber[i] > biggestNumber) {
        biggestNumber = arrayNumber[i];
      }
    }
    return biggestNumber;
  }
  
  console.log(biggestNumberInArray(["a", 3, "n", 4, 2, "c", 10]));