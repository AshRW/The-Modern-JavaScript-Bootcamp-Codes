let variableOne = "Variable One";

if(true){
    // console.log(variableOne);
    let variableOne = "Variable one of new scope"
    let variableTwo = "Variable Two";
    let variableThree = "Variable Threee";
    if(true){
        console.log(variableOne); // Variableone of the new scrope will be displayed
        console.log(variableThree); // Accessible because of the heirarchy
    }
}

// Unaccessible out side the scope
console.log(variableTwo); 