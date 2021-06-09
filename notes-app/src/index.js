import {createNote} from './notes';
import {setFilters} from './filters';
import {renderNotes} from './views';


renderNotes();

// Search Input Text Field function
document.querySelector("#seach-input-field").addEventListener("input", function(event){
    setFilters({
        searchText:event.target.value
    })
    renderNotes();
})

//Drop down listner
document.querySelector("#filter-by").addEventListener("change", function(e){
    setFilters({
        sortBy:e.target.value
    })
    renderNotes();
})

// Add new notes listner
document.querySelector("#add-new-note-form").addEventListener("submit", function(e){
    e.preventDefault();
    // let newNoteValue=e.target.elements.newNoteValue.value
    const newNoteId = createNote();
    location.assign(`/edit-notes.html#${newNoteId}`)
})

window.addEventListener('storage', function(e){
    if(e.key === 'notesKey'){
        renderNotes();
    }
})

