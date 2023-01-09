import ListPage from "../components/Listing/ListPage";
import Classes from '../components/Listing/listing.module.css';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";


const Listing = () => {

    return (
        <>
        <Nav/>
            <section className="listing section">
                <h4 className="heading--quadruple">Available</h4>
                <h2 className=" heading--secondary bolder">Current Listing</h2>
                <div className={ Classes }>
                </div>
                <ListPage />
            </section>
            <Footer/>
        </>

    )
};

export default Listing;