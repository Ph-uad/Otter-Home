import Nav from "../components/layout/navigation/Nav";
import {Link } from 'react-router-dom';

const ErrorPage = () => {

    console.log("working");
    return (
        <>
            <Nav />
            <section>
                  <h2 className="heading--secondary center">Page Not Found</h2>
                  <Link to='/' className="width--max "><span className="blocks paragraph center">GO Home</span></Link>
                
            </section>
        </>
    )
}
export default ErrorPage;