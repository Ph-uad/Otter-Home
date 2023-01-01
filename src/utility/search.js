
const Search = ({content, setSearchText}) =>{

    const changeHandler = e =>{setSearchText(e.target.value);}

    return(
        <form action="search">
               <input spellCheck="false" className="search" type="text" placeholder="Search properties..." onChange={changeHandler} />
        </form>
    )

}
export default Search;