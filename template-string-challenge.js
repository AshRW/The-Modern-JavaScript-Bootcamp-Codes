let getTipAmount = function (total, tipPercentage=0.2) {
    return `A good tip would be of ${total*tipPercentage} on the bill total of ${total} with a ${tipPercentage} discoount percentage`;
}

console.log(getTipAmount(100,0.25))