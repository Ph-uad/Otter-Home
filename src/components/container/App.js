import React from 'react';
// import Nav from '../nav/Nav';
import Header from '../header/Header';
import Apartment from '../apartment/Apartment';
// import HotDeals from '../hotdeals/HotDeals';
// import Categories from '../categories/Categories';
// import Aboutus from '../aboutus/Aboutus';
import Footer from '../footer/Footer';
import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <div className="fluid-container" id='apartment'>
        <Apartment />
        {/* <HotDeals /> */}
        {/* <Categories /> */}
        {/* <Aboutus /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
