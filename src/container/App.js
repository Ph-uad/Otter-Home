import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css'
import Listing from '../pages/Listing';
import Homepage from '../pages/Hompage';
import Nav from '../components/nav/Nav';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import PropertyDetails from '../components/propertyDetails/PropertyDetails';


function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route index element={ <Homepage /> } />
        <Route path="/listing/*" exact element={ <Listing /> } />
        <Route path="/listing/details" element={ <PropertyDetails /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
