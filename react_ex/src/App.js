import './App.css';
import React from "react";
import {Route, Link, Routes} from "react-router-dom";

import Home  from "../src/pages/Home";
import Personal from '../src/pages/Personal';
import NRI from '../src/pages/NRI';
import SME from "../src/pages/SME";
import Wholesale from '../src/pages/Wholesale';
import Agri from '../src/pages/Agri';

function App() {
  return (
    <div className="App">
      <nav>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png" alt="Logo" className="logo-image" />
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/Personal" class="list">
            Personal
          </Link>
          <Link to="/NRI" class="list">
            NRI
          </Link>
          <Link to="/SME" class="list">
            SME
          </Link>
          <Link to="/Wholesale" class="list">
            Wholesale
          </Link>
          <Link to="/Agri" class="list">
            Agri
          </Link>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/NRI" element={<NRI />} />
        <Route path="/SME" element={<SME />} />
        <Route path="/Wholesale" element={<Wholesale />} />
        <Route path="/Agri" element={<Agri />} />
      </Routes>
    </div>
  );
}

export default App;