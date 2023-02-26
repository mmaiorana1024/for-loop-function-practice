// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let clientBalanceError = [];
  for (let i = 0; i < array.length; i++) {
    let deposits = array[i].deposits;
    let depositsArr = [];

    let withdrawals = array[i].withdrawals;
    let withdrawalsArr = [];

    let depositsSum = 0;
    let withdrawalsSum = 0;

    let clientBalance = 0;
    clientBalance = array[i].balance;

    //get deposit array
    if (deposits === undefined) {
      depositsArr.push(0);
    } else {
      for (let j = 0; j < deposits.length; j++) {
        depositsArr.push(deposits[j]);
      }
    }

    //get withdrawal array
    if (array[i].withdrawals === undefined) {
      withdrawalsArr.push(0);
    } else {
      for (let j = 0; j < withdrawals.length; j++) {
        withdrawalsArr.push(withdrawals[j]);
      }
    }

    //sum deposits array
    for (let x = 0; x < depositsArr.length; x++) {
      depositsSum = depositsSum + depositsArr[x];
    }

    //sum withdrawals array
    for (let y = 0; y < withdrawalsArr.length; y++) {
      withdrawalsSum = withdrawalsSum + withdrawalsArr[y];
    }

    // deposits / withdrawals delta
    if (clientBalance !== depositsSum - withdrawalsSum) {
      clientBalanceError.push({ id: array[i].id, name: array[i].name, balance: array[i].balance, deposits: array[i].deposits, withdrawals: array[i].withdrawals });
    }
  }
  return clientBalanceError;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
