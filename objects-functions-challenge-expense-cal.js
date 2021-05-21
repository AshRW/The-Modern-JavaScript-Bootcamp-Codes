let myAccount = {
    name:"Andy Bernard",
    expense:0,
    income:0
};

let addIncome = function (userAccount, valueToAdd) {
    userAccount.income += valueToAdd;
}

let addExpense = function (userAccount, valueToAdd) {
    userAccount.expense += valueToAdd;
}

let accountSummaryPrinter = function (userAccount) {
    console.log(`Account name: ${userAccount.name} has balance ${userAccount.income-userAccount.expense}. ${userAccount.income} in income ${userAccount.expense} in expense`);
}

let accountReset = function (userAccount) {
    userAccount.expense=0;
    userAccount.income=0;
}

addIncome(myAccount, 100);
addExpense(myAccount, 2.5);
addExpense(myAccount, 10);
accountSummaryPrinter(myAccount);
accountReset(myAccount);
accountSummaryPrinter(myAccount);