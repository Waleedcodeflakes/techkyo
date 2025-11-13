import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import HeroCommon from '../../Sections/HeroCommon/HeroCommon'
import Footer from '../../Sections/Footer/Footer'
import CoreServicesContent from './CoreServicesContent'

const CoreServices = () => {
  return (
    <div>
        <Navbar/>
        <HeroCommon title="CORE SERVICES" url="CORE SERVICES"  />
        <CoreServicesContent/>
        <Footer/>
    </div>
  )
}

export default CoreServices