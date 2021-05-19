let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer Vegan Dishes");
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer some vegan dishes");
} else {
    console.log("Offer anything on the menue");
}