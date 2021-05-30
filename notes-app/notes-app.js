let notes = getNotesFromLocalStorage();

const filters = {
    searchText:''
}

const renderNotesGeneralized = function (){
    renderNotes(notes, filters);
}

renderNotesGeneralized();

// Search Input Text Field function
document.querySelector("#seach-input-field").addEventListener("input", function(event){
    filters.searchText = event.target.value;
    renderNotesGeneralized();
})

//Drop down listner
document.querySelector("#filter-by").addEventListener("change", function(e){
    console.log(e.target.value);
})

// Add new notes listner
document.querySelector("#add-new-note-form").addEventListener("submit", function(e){
    e.preventDefault();
    let newNoteValue=e.target.elements.newNoteValue.value
    if(newNoteValue.length === 0 ){
        newNoteValue = "UnNamed Note";
    }
    let newNoteObj = {
        title:newNoteValue,
        body:"nothing yet",
        id:uuidv4()
    }
    notes.push(newNoteObj);
    saveNotesToLocalStorage(notes);
    // renderNotesGeneralized();
    location.assign(`/edit-notes.html#${newNoteObj.id}`)
    e.target.elements.newNoteValue.value=''; //reset form field to nothing
})

// document.querySelector("#add-new-note-button").addEventListener('click', function(e){
//     location.assign('/edit-notes.html');
// })

window.addEventListener('storage', function(e){
    if(e.key === 'notesKey'){
        // console.log(e.newValue)
        notes = JSON.parse(e.newValue);
        renderNotesGeneralized();
    }
})

// const now1 = new Date();
// console.log(now1.getTime());
// const now2 = new Date('September 2 1998 15:01:00')
// console.log(now2.getTime())
// console.log(now1.getTime()<now2.getTime())

const now = moment().set({'year':1998, 'month':8, 'date':2, 'hour': 15, 'minute':1, 'second':00});
console.log(now.format('MMMM D, YYYY'));
console.log(now.toString());