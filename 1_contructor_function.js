function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = (amount) => {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// const rakeshAccount = new BankAccount("Rakesh kr.", 1000);
// const johnAccount = new BankAccount("Jhon Doe");

// rakeshAccount.deposite(7050);
// johnAccount.deposite(24000)

// rakeshAccount.deposite(30000)
// johnAccount.withdraw(20050)

// console.log(rakeshAccount, johnAccount);

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);

  // console.log(customerName.value, balance.value);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
