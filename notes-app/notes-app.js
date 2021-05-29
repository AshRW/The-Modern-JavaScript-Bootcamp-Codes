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
    let newNoteObj = {
        title:newNoteValue,
        body:"nothing yet",
        id:uuidv4()
    }
    notes.push(newNoteObj);
    saveNotesToLocalStorage(notes);
    renderNotesGeneralized();
    e.target.elements.newNoteValue.value=''; //reset form field to nothing
})