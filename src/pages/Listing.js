import ListPage from "../components/listing/ListPage";
import Classes from '../components/listing/listing.module.css';
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

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