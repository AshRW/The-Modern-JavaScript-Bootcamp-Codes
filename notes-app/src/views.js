import moment from 'moment';
import { getFilters } from './filters';
import {getNotes, sortFilteredNotes} from './notes'

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

const renderNotes = ()=>{
    const filter = getFilters()
    const array = getNotes()
    const parentElement = document.querySelector("#notes-display-div");
    const filteredNotes = array.filter((item)=> item.title.toLowerCase().includes(filter.searchText.toLowerCase()))
    sortFilteredNotes(filteredNotes, filter.sortBy)
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

const initializeEditPage = (noteId)=>{
    // let hashData = location.hash.substring(1);
    const editNoteTitle =  document.querySelector("#note-title");
    const editNoteBody = document.querySelector("#note-body");
    const lastUpdatedText = document.querySelector("#last-updated");
    const notes = getNotes();
    const editNote = notes.find(function(item){
        return item.id === noteId;
    })
    if (editNote === undefined){
        location.assign('/index.html');
    }

    editNoteTitle.value = editNote.title;
    editNoteBody.value = editNote.body;
    lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
}

export {
    renderNotes,
    initializeEditPage
}