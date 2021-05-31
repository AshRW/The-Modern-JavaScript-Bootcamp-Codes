// Save data to LocalStorage
const saveNotesToLocalStorage = (notesToSave)=>{
    const data = JSON.stringify(notesToSave);
    localStorage.setItem('notesKey', data);
}

// Function to add create a new DOM element of given type and add it to the html
const addElement = (typeOfElement, elementText, elementLocation) =>{
    let newElement = document.createElement(typeOfElement);
    newElement.textContent = elementText;
    document.querySelector(elementLocation).appendChild(newElement);
}

const removeNote = (noteId) => {
    const noteIndex = notes.findIndex((item)=>item.id === noteId)
    if(noteIndex>-1){
        notes.splice(noteIndex, 1);
    }
}

const addNoteElement =(objOfNote)=>{
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
    noteTitle.setAttribute('href', `/edit-notes.html#${objOfNote.id}`)
    noteElement.appendChild(noteTitle);

    document.querySelector('#notes-display-div').appendChild(noteElement);
}

// Renders filtered notes and calls the addElement function to render the notes to the html
const renderNotes = (array, filter)=>{
    const filteredNotes = array.filter((item)=> item.title.toLowerCase().includes(filter.searchText.toLowerCase()))
    sortFilteredNotes(filteredNotes, filters.sortBy)
    document.querySelector("#notes-display-div").innerHTML='';
    filteredNotes.forEach((item)=>{
        addNoteElement(item);
    })
}

//Sort Notes accoring to the filter
const sortFilteredNotes = (notesToSort, sortBy)=> {
    if(sortBy==="edited"){
        criteria="updatedAt";
        notesToSort.sort(function(a,b) {
            if(a[criteria]>b[criteria]) return -1;
            else if (a[criteria]<b[criteria]) return 1;
            else return 0;
        })
    } else if (sortBy==="created"){
        criteria="createdAt";
        notesToSort.sort(function(a,b) {
            if(a[criteria]>b[criteria]) return 1;
            else if (a[criteria]<b[criteria]) return -1;
            else return 0;
        })
    } else {
        notesToSort.sort(function (a,b) {
            if(a.title.toLowerCase()<b.title.toLowerCase()) return -1;
            else if (a.title.toLowerCase()>b.title.toLowerCase()) return 1;
            else return 0 ;
        });
    }
}


// Get Notes from local storage else return empty array
const getNotesFromLocalStorage = ()=> {
    const notesJSON = localStorage.getItem('notesKey');
    if(notesJSON!=null){
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

//Update last updated timestamp by taking in the particular note
const updateTimeStampToNow = (note)=> {
    note.updatedAt = moment().valueOf();
}