'use strict'
const getTip = (amount=>{
    if(typeof amount === 'number'){
        return amount*2.5;
    } else {
        throw Error("Enter Correct number only");
    }
})



try {
    console.log(getTip(true))
} catch (error) {
    console.log(error)
}