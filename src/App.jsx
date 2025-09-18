import React, {useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/Pages/HomePage/HomePage';
import Services from './components/Pages/Services/Services';

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
      </Routes>
      {/* <TitleUpdater/> */}
    </Router>
  )
}

export default App
