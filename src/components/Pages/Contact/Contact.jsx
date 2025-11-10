import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import QuestionForm from '../HomePage/QuestionForm/QuestionForm'
import {  Mail, MapPinCheck, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <section className='mt-42 h-[400px] text-center flex items-center justify-center'>
            <div className="w-full h-full absolute opacity-90 z-0" style={{backgroundColor: "rgba(0,102,191,0.73)"}}></div>
            <div className='relative z-3'>
                <h1 className='poppins-semibold text-[52px] text-white'>Let's get in touch.</h1>
                <h1 className='poppins-semibold text-[52px] text-white'>Contact us.</h1>
                <p className='poppins-regular text-[18px] text-white'>Your queries are important to us, reach us anytime for further information</p>
            </div>
        </section>
        <QuestionForm hide='false' />
        <section className='my-20 text-center w-[92%] sm:w-[80%] m-auto'>
            <p className='poppins-regular text-[18px] text-[#696969]'>WE WORK SEAMLESSLY WITH OUR CLIENTS FOR THE LONG-TERM</p>
            <h2 className='poppins-semibold text-[34px] text-[#1f276e]'>Give us a call or drop by anytime, we endeavor<br/> to answer all inquiries within 24 hours.</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-8'>
                <div style={{boxShadow: '0 10px 35px rgba(38, 42, 76, 0.1)'}} className='rounded-[14px] p-5 border border-[#e8e8e8] flex flex-col gap-5 justify-center'>
                    <MapPinCheck className='w-6 h-6 self-center text-[#1f276e]' />
                    <h3 className='poppins-semibold text-[20px] text-[#1f276e]'>UK Office</h3>
                    <p className='poppins-medium text-[15px] text-[#696969]'>450 Bath Road, Longford, Heathrow London, UB7 0EB, UK</p>
                </div>
                {/* <div style={{boxShadow: '0 10px 35px rgba(38, 42, 76, 0.1)'}} className='rounded-[14px] p-5 border border-[#e8e8e8] flex flex-col gap-5 justify-center items-center'>
                    <Phone className='w-6 h-6 text-[#1f276e]' />
                    <h3 className='poppins-semibold text-[20px] text-[#1f276e]'>Phone</h3>
                    <p className='poppins-medium text-[15px] text-[#696969]'>+33 650 30 6719</p>
                    <p className='poppins-medium text-[15px] text-[#696969]'>+33 650 30 6719</p>
                </div> */}
                <div style={{boxShadow: '0 10px 35px rgba(38, 42, 76, 0.1)'}} className='rounded-[14px] p-5 border border-[#e8e8e8] flex flex-col gap-5 justify-center items-center'>
                    <Mail className='w-6 h-6 text-[#1f276e]' />
                    <h3 className='poppins-semibold text-[20px] text-[#1f276e]'>Email</h3>
                    <p className='poppins-medium text-[15px] text-[#696969]'>sales@techkyo.com</p>
                    <p className='poppins-medium text-[15px] text-[#696969]'>contact@techkyo.com</p>
                </div>
            </div>
        
        </section>
        <Footer/>
    </div>
  )
}

export default Contact