import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Apartment from '../apartment/Apartment';
import HotDeals from '../Hotdeals/HotDeals';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import './App.css'


function App() {

  return (
    <div className="App">

      <Header/>
      <Nav></Nav>
        <div className="fluid-container" id='apartment'>
        <Apartment/>
        <HotDeals />
        <Categories />
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
