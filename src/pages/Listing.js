<<<<<<< HEAD
import ListItems from "../components/Listing/ListItem";
import Classes from '../components/Listing/listing.module.css';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
=======
import ListPage from "../components/listing/ListPage";
import Classes from '../components/listing/listing.module.css';
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
>>>>>>> fb06fc9fb4aca0acec206a745bb0aa4862228cf7

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