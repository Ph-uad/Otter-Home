import ListItems from "../components/listing/ListItem";
import Classes from '../components/listing/listing.module.css';

const Listing = () => {

    return (
        <>
            <section className="listing section">
                <h4 className="heading-quadruple">Available</h4>
                <h2 className=" heading-secondary bolder">Current Listing</h2>
                <div className={ Classes }>
                </div>
                <ListItems count={8} />
            </section>
        </>

    )
};

export default Listing;