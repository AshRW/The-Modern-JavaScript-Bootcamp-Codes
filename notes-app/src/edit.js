import {initializeEditPage} from './views'
import {updateNote, removeNote} from './notes';
import moment from 'moment';

const hashData = location.hash.substring(1);

const editNoteTitle =  document.querySelector("#note-title");
const editNoteBody = document.querySelector("#note-body");
const lastUpdatedText = document.querySelector("#last-updated");

initializeEditPage(hashData);

editNoteTitle.addEventListener('input', function(e){
    const editNote = updateNote(hashData, {
        title:e.target.value
    })
    lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
})

editNoteBody.addEventListener('input', function(e){
    const editNote = updateNote(hashData,{
        body:e.target.value
    })
    lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
})

document.querySelector("#remove-note-button").addEventListener('click', function(e){
    removeNote(hashData);
    location.assign('/index.html');
})

window.addEventListener('storage', function (e) {
    if (e.key === "notesKey"){
        initializeEditPage(hashData);
    }
})


