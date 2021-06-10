const filters = {
    title: '',
    completed:false
}

const getFilters = () => filters;

const setFilters = ({title, completed}) => {
    if(typeof title ===  'string'){
        filters.title = title;
    }
    if(typeof completed === 'boolean'){
        filters.completed = completed;
    }
}

export{
    getFilters,
    setFilters
}