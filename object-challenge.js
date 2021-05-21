let human = {
    name:"Andy Bernard",
    age:30,
    location:"Scranton, PA, USA"
};

let objectPrinter = function (obj) {
    console.log(`${obj.name} is ${obj.age} years old and lives in ${obj.location}`);
}

objectPrinter(human);
human.age+=1;
objectPrinter(human);