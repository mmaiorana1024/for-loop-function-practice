// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  const reversedArray = [];
  let arrayCounter = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j === arrayCounter) {
        reversedArray.push(array[arrayCounter]);
        arrayCounter -= 1;
      }
    }
  }
  return reversedArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
