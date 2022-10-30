import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css'
import Listing from '../components/Listing/Listing';
import Homepage from '../pages/Hompage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/home" element={ <Listing /> } />
      </Routes>


      {/*  */}
    </div>
  );
}

export default App;
