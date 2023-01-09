
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Service from '../components/Plan/Services';
import Footer from '../components/Footer/Footer';
import Attributes from '../components/Attribute/attribute1';
import Attributes2 from '../components/Attribute/attribute2';
import Caption from '../components/Attribute/caption';
import Testimonials from '../components/Attribute/testimonial';

const Homepage = () => {

    return (
        <>
            <Nav />
            <Header />
            <Attributes />
            <Attributes2 />
            <Service />
            <Caption />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Homepage;