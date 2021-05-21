let tempConverter = function (tempInCelsius) {
    let kelvin = tempInCelsius + 273.15;
    let faren = (tempInCelsius * (9/5)) + 32

    return{
        celsius:tempInCelsius,
        kelvin:kelvin,
        fahrenheit:faren
    }
}

console.log(tempConverter(20).celsius);
console.log(tempConverter(20).kelvin);
console.log(tempConverter(20).fahrenheit);