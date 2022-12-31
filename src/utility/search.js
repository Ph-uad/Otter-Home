
const Search = ({content, setSearchText}) =>{

    const changeHandler = e =>{setSearchText(e.target.value);}

    return(
        <form action="search">
               <input className="search" type="text" placeholder="Search properties..." onChange={changeHandler} />
        </form>
    )

}
export default Search;