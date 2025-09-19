import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import { ChevronRight } from 'lucide-react'
import career from '../../../assets/images/career.webp'

const Careers = () => {
  return (
    <div>
        <Navbar/>
        {/* hero */}
        <section className='mt-10 px-4 sm:px-20 flex items-center m-auto h-screen bg-[#f0f1f5] rounded-[50px]'>
            <div className='flex gap-10 w-full'>
                <div className='w-full md:w-[50%]'>
                    <h1 className='poppins-semibold text-[48px] sm:text-[58px] md:text-[70px] text-[#1f276e]'>Looking for a new career?</h1>
                    <p className='poppins-light text-xl text-[#696969] my-4 pb-5'>What life is like at Techkyo? It's pretty awesome!</p>
                    <button className='w-fit bg-[#1f276e] px-5 py-3 rounded-[50px] text-white poppins-medium flex items-center gap-3'>See positions
                    <ChevronRight className='w-5 h-5 text-white' />
                </button>
                </div>
                <div className='hidden md:flex w-[50%] rounded-[12px]' style={{boxShadow: '0 20px 70px rgba(38, 42, 76, 0.2)'}}>
                    <img src={career} className='rounded-[12px]' alt="career" />
                </div>
            </div>
        </section>
        {/* form */}
        <section className='my-20 text-center'>
            <h2 className='poppins-semibold text-[30px] sm:text-[38px] text-[#1f276e]'>Upload Your Resume</h2>
            <p className='poppins-regular text-[15px] sm:text-[18px] text-[#7a7d8c] mt-4'>We may have an available opportunity for you.</p>
            <form action="" className='w-[92%] sm:w-[60%] m-auto text-left mt-14 flex flex-col gap-6'>
                <div>
                <label className='poppins-regular text-sm text-[#696969]' htmlFor="name">Your name</label>
                    <input className='bg-[#f0f1f5] poppins-regular text-[#696969] w-full text-sm rounded-full border-none outline-none py-4 px-6' type="text" id='name' />
                </div>
                <div>
                <label className='poppins-regular text-sm text-[#696969]' htmlFor="email">Your email</label>
                    <input className='bg-[#f0f1f5] poppins-regular text-[#696969] w-full text-sm rounded-full border-none outline-none py-4 px-6' type="email" id='email' />
                </div>
                <div>
                <label className='poppins-regular text-sm text-[#696969]' htmlFor="location">Your Location</label>
                    <input className='bg-[#f0f1f5] poppins-regular text-[#696969] w-full text-sm rounded-full border-none outline-none py-4 px-6' type="text" id='location' />
                </div>
                <div>
                <label className='poppins-regular text-sm text-[#696969]' htmlFor="file">Attach Your Resume</label>
                    <input className='bg-[#f0f1f5] poppins-regular text-[#696969] w-full text-sm rounded-full border-none outline-none py-4 px-6' type="file" id='file' />
                </div>
                <div>
                <label className='poppins-regular text-sm text-[#696969]' htmlFor="name">Your message (optional)</label>
                <textarea rows='5' className='bg-[#f0f1f5] poppins-regular text-[#696969] w-full text-sm rounded-[30px] border-none outline-none py-4 px-6' name="message" id="">
                </textarea>
                </div>
                <div className='flex justify-center'>
                    <input type="submit" value="Submit" className='cursor-pointer bg-[#1f276e] px-18 py-5 rounded-[50px] text-white poppins-medium ' />
                </div>
            </form>
        </section>
        <Footer/>
    </div>
  )
}

export default Careers