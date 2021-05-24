const notes = [{
    title:"Doc Appointment",
    body:"Get to the dentist at 5:00PM"
},{
    title:"Check Weather",
    body:"By an Umbrella"
},{
    title:"Buy Products",
    body:"Get milk, butter, bread, and eggs"
}]


const button1 = document.querySelector("button");
button1.addEventListener('click', function(event){
    console.log("Button Clicked");
    console.log(event)
})