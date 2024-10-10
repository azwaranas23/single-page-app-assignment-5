// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import About from './pages/About';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Interest from './pages/Interest';
import Skills from './pages/Skills';

class App extends React.Component {
  render() {
    return (
      <div className="flex">
        <Navbar />

        {/* Content Area */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
