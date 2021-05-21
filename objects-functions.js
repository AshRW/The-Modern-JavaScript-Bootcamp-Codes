let car1 = {
    brand:"Honda",
    model:"Accord",
    type:"Sedan",
    fuelConsumtion: 18
};

let car2 = {
    brand:"Toyota",
    model:"Supra",
    type:"Tuner",
    fuelConsumtion: 16
};

let carObjectPrinter = function (carObj) {
    return {
        shortDesc:`${carObj.brand} launched the ${carObj.model}`,
        fullDesc:`${carObj.brand} launched the ${carObj.model} which is their first in class ${carObj.type} with a milage of ${carObj.fuelConsumtion}`
    }
    // console.log(`${carObj.brand} launched the ${carObj.model} which is their first in class ${carObj.type} with a milage of ${carObj.fuelConsumtion}`);
}

// carObjectPrinter(car1);
console.log(carObjectPrinter(car1).fullDesc);
// carObjectPrinter(car2);
console.log(carObjectPrinter(car2).shortDesc);