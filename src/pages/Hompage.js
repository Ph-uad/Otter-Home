
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import Service from '../components/plan/Services';
import Footer from '../components/footer/Footer';
import Attributes from '../components/attribute/attribute1';
import Attributes2 from '../components/attribute/attribute2';
import Caption from '../components/attribute/caption';
import Testimonials from '../components/attribute/testimonial';

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