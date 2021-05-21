const scorePrinter = function (score, totalScore=100) {
    const percentage = (score/totalScore)*100;
    if(percentage>=90){
        console.log(`You got an A (${percentage}%)`);
    } else if (percentage>=80 && percentage<90){
        console.log(`You got a B (${percentage}%)`)
    } else if (percentage>=70 && percentage<80){
        console.log(`You got a C (${percentage}%)`)
    } else if (percentage>=60 && percentage<70){
        console.log(`You got a D (${percentage}%)`)
    } else {
        console.log(`You got a F (${percentage}%)`)
    }
}

scorePrinter(40, 80);