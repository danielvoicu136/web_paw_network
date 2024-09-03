import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './frontend/pages/Home.js';


function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
