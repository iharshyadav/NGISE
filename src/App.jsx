import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Commitee from './pages/Commitee';
import Accomodation from './pages/Accomodation';
import Registration from './pages/Registration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/commitee" element={<Commitee />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App