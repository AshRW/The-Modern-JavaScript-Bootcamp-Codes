let isAccountLocked = false;
// Available user roles: user & admin
let userRole = "admin";

if(isAccountLocked){
    console.log("Account is Locked");
} else if(userRole==="admin") {
    console.log("welcome to your account admin");
} else {
    console.log("Welcome to your account");
}