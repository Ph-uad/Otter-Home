
const Search = ({list, searchResult}) =>{

    const submitHandler = e =>{e.preventDefault();}

    const onChangeHandler = e => {
        if(!e.target.value.trim())return searchResult(list);

        const resultArray = list.filter(item => item.location.toLowerCase().includes(e.target.value) || item.description.toLowerCase().includes(e.target.value));
        searchResult(resultArray)
    }

    return(
        <form className="search" onSubmit={submitHandler}>
               <input spellCheck="false" className="search__input width--mid" type="text" placeholder="Search properties by locaton..." onChange={onChangeHandler} />
        </form>
    )

}
export default Search;