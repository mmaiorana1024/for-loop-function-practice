// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  let balanceGtZero = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      balanceGtZero.push({ id: array[i].id, balance: array[i].balance });
    }
  }
  let minCurrentBalance = balanceGtZero[0].balance;
  let clientId = 0;
  for (let x = 0; x < balanceGtZero.length; x++) {
    if (balanceGtZero[x].balance < minCurrentBalance) {
      minCurrentBalance = balanceGtZero[x].balance;
      clientId = balanceGtZero[x].id;
    }
  }
  let clientWithMinBalance = [];
  for (let y = 0; y < array.length; y++) {
    if (clientId === array[y].id) {
      clientWithMinBalance.push({ id: array[y].id, name: array[y].name, balance: array[y].balance, deposits: array[y].deposits, withdrawals: array[y].withdrawals });
    }
  }
  return clientWithMinBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
