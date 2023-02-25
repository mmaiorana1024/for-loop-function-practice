// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let balanceGtZero = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      balanceGtZero.push({ id: array[i].id, balance: array[i].balance });
    }
  }
  //console.log(balanceGtZero);
  let maxCurrentBalance = balanceGtZero[0].balance;
  let clientId = 0;
  for (let x = 0; x < balanceGtZero.length; x++) {
    if (balanceGtZero[x].balance > maxCurrentBalance) {
      maxCurrentBalance = balanceGtZero[x].balance;
      clientId = balanceGtZero[x].id;
    }
  }
  let clientWithMaxBalance = [];
  for (let y = 0; y < array.length; y++) {
    if (clientId === array[y].id) {
      clientWithMaxBalance.push({ id: array[y].id, name: array[y].name, balance: array[y].balance, deposits: array[y].deposits, withdrawals: array[y].withdrawals });
    }
  }
  return clientWithMaxBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
