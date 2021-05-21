let isValidPassword = function (password) {
    // if(password.length>=8 && !password.includes("password")){
    //     return true;
    // } else return false;

    // Better and cleaner way of writing the same thing, all in one line
    return (password.length>=8 && !password.includes("password"))
}

console.log(isValidPassword("passwood"));