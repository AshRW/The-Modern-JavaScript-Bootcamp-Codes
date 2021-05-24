//-------------------------------------------
// Array Basics:
//-------------------------------------------
const notes = ["note 1", "note 2", "note 3"];
// console.log(`Original: ${notes}`);
// notes[0]="note 1 new";


//-------------------------------------------
// Array with Methods:
//-------------------------------------------
// notes.pop();
// notes.push("new note 3");
// notes.splice(1,1,"new note 2");
// notes.unshift("very first note");
// notes.shift();


//-------------------------------------------
// Array Looping:
//-------------------------------------------
// notes.forEach(function (item, index) {
//     console.log(`Item: ${item} is on index: ${index}`);
// })


//-------------------------------------------
// Array Looping for Loop:
//-------------------------------------------
// for(let i=0;i<3;i++){
//     console.log(notes[i]);
// }

//-------------------------------------------
// Array Searching 1:
//-------------------------------------------
// console.log(notes.indexOf("note 1"));


//-------------------------------------------
// Array Searching 2:
//-------------------------------------------
const note2 = [{
    title:"Doc Appointment",
    body:"Get to the dentist at 5:00PM"
},{
    title:"Check Weather",
    body:"By an Umbrella"
},{
    title:"Buy Products",
    body:"Get milk, butter, bread, and eggs"
}]

// console.log(note2.findIndex(function (item) {
//     return item.title === "Check Weather"
// }))

//-------------------------------------------
// Filtering Arrays:
//-------------------------------------------

const findNotes=function (array, searchWord) {
    return array.filter(function (item) {
        const isTitleMatch = item.title.toLowerCase().includes(searchWord.toLowerCase());
        const isBodyMatch = item.body.toLowerCase().includes(searchWord.toLowerCase());
        return isBodyMatch || isTitleMatch;
    })
}
// console.log(findNotes(note2, "an"));

//-------------------------------------------
// Sorting Arrays:
//-------------------------------------------

const sortNotes = function (notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase()<b.title.toLowerCase()){
            return -1;
        } else if (a.title.toLowerCase()>b.title.toLowerCase()){
            return 1;
        } else {return 0;}
    })
}

sortNotes(note2);
console.log(note2);