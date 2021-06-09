// Get Notes from local storage else return empty array
const getNotesFromLocalStorage = ()=> {
    const notesJSON = localStorage.getItem('notesKey');
    if(notesJSON!=null){
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}
// Save data to LocalStorage
const saveNotesToLocalStorage = (notes)=>{
    const data = JSON.stringify(notes);
    localStorage.setItem('notesKey', data);
}
const removeNote = (noteId) => {
    const noteIndex = notes.findIndex((item)=>item.id === noteId)
    if(noteIndex>-1){
        notes.splice(noteIndex, 1);
        saveNotesToLocalStorage();
    }
}
//------------------------------------------------------------------------------------------------------------------

// Function to add create a new DOM element of given type and add it to the html
const addElement = (typeOfElement, elementText, elementLocation) =>{
    let newElement = document.createElement(typeOfElement);
    newElement.textContent = elementText;
    document.querySelector(elementLocation).appendChild(newElement);
}



const addNoteElement =(objOfNote)=>{
    const noteElement = document.createElement('a');
    const noteTitleElement = document.createElement('p');
    noteTitleElement.classList.add('list-item__title')
    const statusElement = document.createElement('p');
    statusElement.classList.add('list-item__subtitle')
    statusElement.textContent = `Last Edited ${moment(objOfNote.updatedAt).fromNow()}`;
    noteTitleElement.textContent=objOfNote.title;
    noteElement.setAttribute('href', `/edit-notes.html#${objOfNote.id}`)
    noteElement.classList.add('list-item')
    noteElement.appendChild(noteTitleElement);
    noteElement.appendChild(statusElement);

    document.querySelector('#notes-display-div').appendChild(noteElement);
}

// Renders filtered notes and calls the addElement function to render the notes to the html
const renderNotes = (array, filter)=>{
    const parentElement = document.querySelector("#notes-display-div");
    const filteredNotes = array.filter((item)=> item.title.toLowerCase().includes(filter.searchText.toLowerCase()))
    sortFilteredNotes(filteredNotes, filters.sortBy)
    parentElement.innerHTML='';
    if(filteredNotes.length>0){
        filteredNotes.forEach((item)=>{
            addNoteElement(item);
        })
    }else{
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent="No Notes";
        emptyMsg.classList.add('empty-message')
        parentElement.appendChild(emptyMsg);
    }
    
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




//Update last updated timestamp by taking in the particular note
const updateTimeStampToNow = (note)=> {
    note.updatedAt = moment().valueOf();
}