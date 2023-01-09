import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css'
import Listing from '../pages/Listing';
import Homepage from '../pages/Hompage';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import PageNotFound from '../pages/PageNotFound';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={ <Listing /> } />
        <Route path='/home' element={ <Homepage /> } />
        <Route path="/listing/*" exact element={ <Listing /> } />
        <Route path="/listing/details" element={ <PropertyDetails /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
