import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css'
import Listing from '../components/Listing/Listing';
import Homepage from '../pages/Hompage';
import Nav from '../components/nav/Nav';
import PropertyDetails from '../components/PropertyDetails/PropertySetails';


function App() {

  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/listing" exact element={ <Listing /> } />
        <Route path="/listing/:propertyID" element={ <PropertyDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
