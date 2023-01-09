import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../../utility/search";
import ListItem from "./ListItem";


const ListPage = () => {
    let propertyList = useSelector(state => state.property.list);
    const [searchResult, setSearchResult] = useState(propertyList)


    return (
        <>
            <Search list={propertyList} searchResult={ setSearchResult } />
            <div className="grid">
                <ListItem result={searchResult} />
            </div>
        </>
    )

}
export default ListPage;