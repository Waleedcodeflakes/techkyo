import React, {useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/Pages/HomePage/HomePage';
import Services from './components/Pages/Services/Services';
import Company from './components/Pages/Company/Company';
import Careers from './components/Pages/Careers/Careers';
import Contact from './components/Pages/Contact/Contact';
import Sectors from './components/Pages/Sectors/Sectors';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth slide to top
    });
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/company' element={<Company />} />
        <Route path='/sectors' element={<Sectors />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <TitleUpdater/> */}
    </Router>
  )
}

export default App
