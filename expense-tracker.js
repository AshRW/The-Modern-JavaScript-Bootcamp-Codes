const account = {
    accountName: "Anurag RW",
    expenses:[],
    income:[{
        description:"Part-Time",
        amount:500
    }],
    addExpense: function(description, amount){
        let expenseObject={
            description:description,
            amount:amount
        };
        this.expenses.push(expenseObject);
    },
    getAccountSummary: function(){
        let totalExpense = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(item){
            totalExpense += item.amount;
        })
        this.income.forEach(function(item){
            totalIncome += item.amount;
        })
        console.log(`${this.accountName} has ${totalIncome - totalExpense} in Balance. ${totalExpense} in expenses. ${totalIncome} in income.`);
    },
    addIncome: function(description, incomeAmount){
        let incomeObject = {
            description:description,
            amount:incomeAmount
        };
        this.income.push(incomeObject);
    }
}

account.addExpense("Fees", 300);
account.addExpense("Rent", 100);
account.addIncome("Job", 1000);
account.getAccountSummary();
console.log(account)