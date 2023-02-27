// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let letterInName = "a";
  let clientNames = [[], []];

  for (let i = 0; i < array.length; i++) {
    let nameMatches = "";
    let nameNoMatch = "";

    for (let alphabet of array[i]) {
      if (alphabet === letterInName.toUpperCase() || alphabet === letterInName.toLowerCase()) {
        nameMatches = array[i];
      } else {
        nameNoMatch = array[i];
      }
    }

    if (!nameMatches) {
      clientNames[1].push(array[i]);
    } else {
      clientNames[0].push(array[i]);
    }

    nameMatches = "";
    nameNoMatch = "";
  }

  return clientNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
