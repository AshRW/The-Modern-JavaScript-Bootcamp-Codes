const notes = [{
    title:"Doc Appointment",
    body:"Get to the dentist at 5:00PM"
},{
    title:"Check Weather",
    body:"By an Umbrella"
},{
    title:"Buy Products",
    body:"Get milk, butter, bread, and eggs"
}]

const filters = {
    searchText:''
}

// Button - Click this Button with CLICK event listner
// const button1 = document.querySelector("button");
// button1.addEventListener('click', function(event){
//     console.log("Button Clicked");
//     console.log(event)
// })

// Function to add element to a location in html
const addElement = function (typeOfElement, elementText, elementLocation) {
    let newElement = document.createElement(typeOfElement);
    newElement.textContent = elementText;
    document.querySelector(elementLocation).appendChild(newElement);
}

const renderNotes = function (array, filter){
    const filteredNotes = array.filter(function (item) {
        return item.title.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector("#notes-display-div").innerHTML='';
    filteredNotes.forEach(function(item){
        addElement("p", item.title, "#notes-display-div");
    })
}
renderNotes(notes, filters)

// Input field with INPUT event listner
const searchInput = document.querySelector("#seach-input-field");
searchInput.addEventListener("input", function(event){
    console.log(event.target.value);
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
})

//Drop down listner
document.querySelector("#filter-by").addEventListener("change", function(e){
    console.log(e.target.value);
})