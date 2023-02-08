import { useState } from "react";
import { useSelector } from "react-redux";
import Classes from './listing.module.css'
import Search from "../../UI/search/Search";
import ListItem from "./listItem/ListItem";

const Listing = () => {
    let propertyList = useSelector(state => state.property.list);
    const [searchResult, setSearchResult] = useState(propertyList)
    let show = searchResult.length ? true : false;


    return (
        <>
            <div className={ `flex ${Classes.listing}` }>
                <h2 className=" heading--secondary bolder">Current Listing</h2>
                <Search list={ propertyList } setSearchResult={ setSearchResult } />
            </div>
            <div className={ `grid ${Classes.grid}` }>
                { show && <ListItem result={ searchResult } /> }
                { !show && <p className="paragraph bold">No matches found</p> }
            </div>

        </>
    )
}
export default Listing;