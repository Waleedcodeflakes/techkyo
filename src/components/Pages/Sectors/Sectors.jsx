import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import HeroCommon from '../../Sections/HeroCommon/HeroCommon'
import SectorsData from './SectorsData/SectorsData'
import Footer from '../../Sections/Footer/Footer'

const Sectors = () => {
  return (
    <div>
        <Navbar/>
        <HeroCommon title="Sectors" url="Sectors" />
        <SectorsData/>
        <Footer/>
    </div>
  )
}

export default Sectors