import React, {useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/Pages/HomePage/HomePage';
import Services from './components/Pages/Services/Services';
import Company from './components/Pages/Company/Company';
import Careers from './components/Pages/Careers/Careers';
import Contact from './components/Pages/Contact/Contact';
import Sectors from './components/Pages/Sectors/Sectors';
import { TitleUpdater } from './components/Pages/TitleUpdater';
import TechkyoWorldwide from './components/Pages/TechkyoWorldwide/TechkyoWorldwide';
import Partners from './components/Pages/Partners/Partners';
import Whatsapp from './components/Sections/whatsapp';
import ServicesSubPage from './components/Pages/Services/ServicesSubPage/ServicesSubPage';
import CoreServices from './components/Pages/CoreServices/CoreServices';

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
        <Route path='/core-services' element={<CoreServices/>} />
        <Route path='/services/:id' element={<ServicesSubPage/>} />
        <Route path='/company' element={<Company />} />
        <Route path='/sectors' element={<Sectors />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/techkyo-worldwide' element={<TechkyoWorldwide />} />
        <Route path='/partners' element={<Partners />} />
      </Routes>
      <Whatsapp/>
      <TitleUpdater/>
    </Router>
  )
}

export default App
