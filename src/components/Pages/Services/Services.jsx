import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import HeroCommon from '../../Sections/HeroCommon/HeroCommon'
import ServicesData from './ServicesData/ServicesData'
import Footer from '../../Sections/Footer/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <HeroCommon/>
        <ServicesData/>
        <Footer/>
    </div>
  )
}

export default Services