let hashData = location.hash.substring(1);
const p = document.createElement('p');
p.textContent = hashData;
document.querySelector('body').appendChild(p);

const editNoteTitle =  document.querySelector("#note-title");
const editNoteBody = document.querySelector("#note-body");
let notes = getNotesFromLocalStorage();
let editNote = notes.find(function(item){
    return item.id === hashData;
})
if (editNote === undefined){
    location.assign('/index.html');
}
editNoteTitle.value = editNote.title;
editNoteBody.value = editNote.body;

editNoteTitle.addEventListener('input', function(e){
    const data = e.target.value;
    editNote.title=data;
    saveNotesToLocalStorage(notes);
})

editNoteBody.addEventListener('input', function(e){
    const data = e.target.value;
    editNote.body = data;
    saveNotesToLocalStorage(notes);
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
    }
})


