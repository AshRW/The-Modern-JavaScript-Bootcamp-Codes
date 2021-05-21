let myAccount = {
    name:"Andy",
    expenses:0,
    income:0
}

let addExpense = function (userAccount, expenseValue) {
    userAccount.expenses += expenseValue ;
    console.log(userAccount); 
}

addExpense(myAccount, 200);
console.log(myAccount); 