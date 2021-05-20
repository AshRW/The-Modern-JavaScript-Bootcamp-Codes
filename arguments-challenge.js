let getTipAmount = function (billTotal, tipPercentage = 0.25) {
    return (tipPercentage*billTotal);
}

console.log(getTipAmount(100))