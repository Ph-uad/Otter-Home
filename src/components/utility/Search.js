
const Search = ({ list, setSearchResult }) => {

    const submitHandler = e => e.preventDefault();

    const onChangeHandler = e => {
        let searchInput = e.target.value.toLowerCase()

        if (searchInput.trim() === '') setSearchResult(list)

        const resultArray = list.filter(item => item.location.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput));
        setSearchResult(resultArray)
    }

    return (
        <form className="search" onSubmit={ submitHandler }>
            <input spellCheck="false" className="search__input" type="text" placeholder="Search properties by location..." onChange={ onChangeHandler } />
        </form>
    )
}
export default Search;