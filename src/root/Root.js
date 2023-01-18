import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer/Footer";
import Nav from "../components/layout/navigation/Nav";


function Root() {
    return ( 
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
     );
}

export default Root;