import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Hero from '../../Sections/Hero/Hero'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import TheCompany from './TheCompany/TheCompany'
import Sectors from '../../Sections/Sectors/Sectors'
import Coverage from './Coverage/Coverage'
import QuestionForm from './QuestionForm/QuestionForm'
import Footer from '../../Sections/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhatWeDo/>
        <TheCompany/>
        <Sectors/>
        <Coverage/>
        <QuestionForm/>
        <Footer/>
    </div>
  )
}

export default HomePage