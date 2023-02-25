// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let minNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return minNum;
}

export function findMaxValueInArray(array) {
  let maxNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
