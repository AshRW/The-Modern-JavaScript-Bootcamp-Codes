let hashData = location.hash.substring(1);
const editNoteTitle =  document.querySelector("#note-title");
const editNoteBody = document.querySelector("#note-body");
const lastUpdatedText = document.querySelector("#last-updated");
let notes = getNotesFromLocalStorage();

let editNote = notes.find(function(item){
    return item.id === hashData;
})
if (editNote === undefined){
    location.assign('/index.html');
}
editNoteTitle.value = editNote.title;
editNoteBody.value = editNote.body;
lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
// lastUpdatedText.textContent = moment(editNote.updatedAt).fromNow();

editNoteTitle.addEventListener('input', function(e){
    const data = e.target.value;
    editNote.title=data;
    saveNotesToLocalStorage(notes);
    updateTimeStampToNow(editNote);
    lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
})

editNoteBody.addEventListener('input', function(e){
    const data = e.target.value;
    editNote.body = data;
    saveNotesToLocalStorage(notes);
    updateTimeStampToNow(editNote);
    lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
})

document.querySelector("#remove-note-button").addEventListener('click', function(e){
    removeNote(editNote.id);
    saveNotesToLocalStorage(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', function (e) {
    if (e.key === "notesKey"){
        notes = JSON.parse(e.newValue)
        editNote = notes.find(function(item){
            return item.id === hashData;
        })
        if (editNote === undefined){
            location.assign('/index.html');
        }
        editNoteTitle.value = editNote.title;
        editNoteBody.value = editNote.body;
        lastUpdatedText.textContent = `Last Edited ${moment(editNote.updatedAt).fromNow()}`;
    }
})


