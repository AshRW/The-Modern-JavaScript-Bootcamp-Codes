import uuidv4 from 'uuid/v4';
import moment from 'moment';

let notes=[];

// Get Notes from local storage else return empty array
const getNotesFromLocalStorage = ()=> {
    const notesJSON = localStorage.getItem('notesKey');
    if(notesJSON!=null){
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}
// expose notes from this module
const getNotes = ()=>notes;
notes = getNotesFromLocalStorage();


// Save data to LocalStorage
const saveNotesToLocalStorage = ()=>{
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

const createNote = ()=>{
    const timestamp = moment().valueOf();
    let newNoteObj = {
        title:"",
        body:"",
        id:uuidv4(),
        createdAt: timestamp,
        updatedAt: timestamp
        
    }
    notes.push(newNoteObj);
    saveNotesToLocalStorage();
    return newNoteObj.id;
}

const sortFilteredNotes = (notesToSort, sortBy)=> {
    let criteria;
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

const updateNote = (noteId, updates)=>{
    const note = notes.find((item)=>{
        return item.id===noteId;
    })
    if(!note){
        return
    }
    if(typeof updates.title === 'string'){
        note.title = updates.title;
        note.updatedAt = moment().valueOf();
    }
    if(typeof updates.body === 'string'){
        note.body = updates.body;
        note.updatedAt = moment().valueOf();
    }
    saveNotesToLocalStorage();
    return note;
}

export {
    getNotes,
    createNote,
    removeNote,
    sortFilteredNotes,
    updateNote
}