const shoppingList = getItemsFromLocalStorage();
const filters = {
    searchText:''
}

renderItems(shoppingList, filters)

document.querySelector("#search-input").addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderItems(shoppingList, filters);
})

document.querySelector("#add-new-item-form").addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e.target.elements.inputField1.value);
    const formInputValue = e.target.elements.inputField1.value
    shoppingList.push(formInputValue);
    saveItemsToLocalStorage(shoppingList);
    renderItems(shoppingList,filters);
    e.target.elements.inputField1.value='';
})