import Header from "../components/layout/header/Header";
import Attributes from "../components/layout/poster/Attribute1";
import Caption from "../components/layout/poster/Caption";
import Testimonial from "../components/layout/poster/Testimonial";

function HomePage() {
    return (
        <>
            <Header />
            <Attributes/>
            <Caption/>   
            <Testimonial/>         
        </>
    );
}

export default HomePage;