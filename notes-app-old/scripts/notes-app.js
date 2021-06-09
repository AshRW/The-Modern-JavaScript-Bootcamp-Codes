let notes = getNotesFromLocalStorage();

const filters = {
    searchText:'',
    sortBy:'edited'
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
    // console.log(e.target.value);
    filters.sortBy = e.target.value;
    renderNotesGeneralized();
})

// Add new notes listner
document.querySelector("#add-new-note-form").addEventListener("submit", function(e){
    e.preventDefault();
    let newNoteValue=e.target.elements.newNoteValue.value
    if(newNoteValue.length === 0 ){
        newNoteValue = "UnNamed Note";
    }
    const timestamp = moment().valueOf();
    let newNoteObj = {
        title:newNoteValue,
        body:"",
        id:uuidv4(),
        createdAt: timestamp,
        updatedAt: timestamp
        
    }
    notes.push(newNoteObj);
    saveNotesToLocalStorage(notes);
    // renderNotesGeneralized();
    location.assign(`/edit-notes.html#${newNoteObj.id}`)
    e.target.elements.newNoteValue.value=''; //reset form field to nothing
})

window.addEventListener('storage', function(e){
    if(e.key === 'notesKey'){
        // console.log(e.newValue)
        notes = JSON.parse(e.newValue);
        renderNotesGeneralized();
    }
})

