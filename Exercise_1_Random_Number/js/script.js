/*
Exercise 1: Random Number
Instructions
Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number.
 */

const RandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let evenNumber = [];
    let j = 0;
    for (let i = 0; i < randomNumber; i++) {
      if (i % 2 == 0) {
        evenNumber[j] = i;
        j++;
      }
    }
    console.log(evenNumber);
  }
  
  RandomNumber();