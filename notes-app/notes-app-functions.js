// Save data to LocalStorage
const saveNotesToLocalStorage = function(notesToSave){
    const data = JSON.stringify(notesToSave);
    localStorage.setItem('notesKey', data);
}

// Function to add create a new DOM element of given type and add it to the html
const addElement = function (typeOfElement, elementText, elementLocation) {
    let newElement = document.createElement(typeOfElement);
    newElement.textContent = elementText;
    document.querySelector(elementLocation).appendChild(newElement);
}

const removeNote = function (noteId) {
    const noteIndex = notes.findIndex(function(item){
        return item.id === noteId;
    })
    if(noteIndex>-1){
        notes.splice(noteIndex, 1);
    }
}

const addNoteElement = function(objOfNote){
    let noteElement = document.createElement('div');

    let noteButton = document.createElement('button');
    noteButton.textContent='X';
    noteElement.appendChild(noteButton);
    noteButton.addEventListener('click', function(){
        // console.log(objOfNote);
        removeNote(objOfNote.id);
        saveNotesToLocalStorage(notes);
        renderNotes(notes, filters);
    })

    let noteTitle = document.createElement('a');
    noteTitle.textContent=objOfNote.title;
    noteTitle.setAttribute('href', '/edit-notes.html')
    noteElement.appendChild(noteTitle);

    document.querySelector('#notes-display-div').appendChild(noteElement);
}

// Renders filtered notes and calls the addElement function to render the notes to the html
const renderNotes = function (array, filter){
    const filteredNotes = array.filter(function (item) {
        return item.title.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector("#notes-display-div").innerHTML='';
    filteredNotes.forEach(function(item){
        // addElement("p", item.title, "#notes-display-div");
        addNoteElement(item);
    })
}



// Get Notes from local storage else return empty array
const getNotesFromLocalStorage = function () {
    const notesJSON = localStorage.getItem('notesKey');
    if(notesJSON!=null){
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}