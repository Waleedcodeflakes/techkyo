import React from 'react'
import herobg from '../../../assets/images/worldwide.jpg'
import america from '../../../assets/images/america.jpg'
import apac from '../../../assets/images/apac.png'
import emea from '../../../assets/images/emea.png'
import japan from '../../../assets/images/japan.png'
import australia from '../../../assets/images/australia.png'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'

const TechkyoWorldwide = () => {

    const offices = [
        {
            img: america,
            text: 'North America'
        },
        {
            img: japan,
            text: 'Japan'
        },
        {
            img: australia,
            text: 'Australia'
        },
        {
            img: emea,
            text: 'Europe, Middle East & Africa (EMEA)'
        },
        {
            img: apac,
            text: 'Asia Pacific (APAC)'
        }
    ];

  return (
    <>
    <Navbar/>
    {/* Hero */}
    <section className='mt-16 sm:mt-14 md:mt-20 w-full'>
        <div style={{backgroundImage: `url(${herobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }} 
                className='w-full h-[350px] relative'>
        {/* <div className="w-full h-full" style={{backgroundColor:'#658cbfbc'}}></div> */}
        <div className="w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <div className='flex flex-col justify-center items-center h-full w-full absolute top-0'>
            <h2 className='text-[42px] poppins-semibold text-white'>Teckyo Worldwide Offices</h2>
            <div className='flex items-center gap-3'>
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="/">TECHKYO</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#ccc]' />
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="#">Pages</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#fff]' />
            <Link className='poppins-medium text-base text-[#fff]' to="#">Teckyo Worldwide</Link>
            </div>
        </div>
        </div>
    </section>
    <section className='my-20 bg-[#f0f1f5]'>
        <div className='py-18 w-[92%] md:w-[80%] m-auto'>
        <h3 className='poppins-semibold text-[28px] text-center mb-8 text-[#1f276e]'>Overview</h3>
        <p className='poppins-medium text-base text-[#696969] mb-5 leading-6.5'>Techkyo helps global enterprises reimagine their businesses for the digital age. Through innovative technology solutions built around Digital, IoT, Cloud, automation, Cybersecurity, Analytics, Infrastructure Management, and Engineering Services, amongst others, we solve complex business problems for our clients. We are a ‘next-generation technology firm driven by a unique Mode 1-2-3 strategy that acts as our roadmap for the future and a powerful model for any enterprise looking to thrive in this age of disruption.</p>
        <p className='poppins-medium text-base text-[#696969] leading-6.5'>Techkyo is in 60+ countries with over 4200 technology specialists worldwide, focusing on broad industries and making a difference in the lives of millions every day. Whether working remotely or in an office, our sense of community is nurtured by constant interaction, collaboration, and connection.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify- mt-10'>
            {offices.map((ofc, idx) => (
                <div key={idx} className='flex flex-col items-center'>
                    {/* <div></div> */}
                    <img className='rounded-[14px] mb-4 w-[300px] h-[250px]' src={ofc.img} alt={ofc.text} />
                    <p className='poppins-medium text-base text-[#696969] text-center'>{ofc.text}</p>
                </div>
            ))}
        </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default TechkyoWorldwide