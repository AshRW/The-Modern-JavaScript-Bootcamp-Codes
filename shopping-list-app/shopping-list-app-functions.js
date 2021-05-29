const notesRenderDiv = "#shopping-list-items";

const getItemsFromLocalStorage = function (){
    const itemsJSON = localStorage.getItem('shoppingsKey');
    if(itemsJSON!=null){
        return JSON.parse(itemsJSON);
    }
    else {
        return [];
    }
}

const saveItemsToLocalStorage = function (itemsToStore) {
    const itemsJSON = JSON.stringify(itemsToStore);
    localStorage.setItem('shoppingsKey', itemsJSON);
}

const createNewDOMElement = function(typeOfElementToCreate, elementText, elementLocationToAppend){
    const newElement = document.createElement(typeOfElementToCreate);
    newElement.textContent=elementText;
    document.querySelector("#shopping-list-items").appendChild(newElement);
}

const renderItems = function (array, filterby){
    const filteredItems = array.filter(function(item){
        return item.toLowerCase().includes(filterby.searchText.toLowerCase())
    })
    document.querySelector(notesRenderDiv).innerHTML='';
    filteredItems.forEach(function(item){
        createNewDOMElement('p', item, notesRenderDiv)
    })
}