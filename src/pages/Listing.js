import ListItems from "../components/Listing/ListItem";
import Classes from '../components/Listing/listing.module.css';

const Listing = () => {

    return (
        <>
            <section className="listing section">
                <h4 className="heading-quadruple">Available</h4>
                <h2 className=" heading-secondary bolder">Current Listing</h2>
                <div className={ Classes }>
                </div>
                <ListItems />
            </section>
        </>

    )
};

export default Listing;