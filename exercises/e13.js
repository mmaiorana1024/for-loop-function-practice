// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let depositsClients = [];
  for (let i = 0; i < array.length; i++) {
    let deposit = array[i].deposits;
    if (deposit === undefined) {
      depositsClients.push({ id: array[i].id, name: array[i].name, balance: array[i].balance, withdrawals: array[i].withdrawals });
    } else {
      let sum = 0;
      for (let j = 0; j < deposit.length; j++) {
        sum = sum + deposit[j];
      }
      if (sum <= 2000) {
        depositsClients.push({ id: array[i].id, name: array[i].name, balance: array[i].balance, deposits: array[i].deposits, withdrawals: array[i].withdrawals });
      }
    }
  }
  return depositsClients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
