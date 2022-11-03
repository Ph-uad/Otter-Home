
import Listing from './Listing'
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import Service from '../components/plan/Services';
import Footer from '../components/footer/Footer';

const Homepage = () => {

    return (
        <>
            <Header />
            <Nav />
            <Service />
            <div className="fluid-container" id='apartment'>
                <Listing />
            </div>
            <Footer />
        </>
    )
}

export default Homepage;