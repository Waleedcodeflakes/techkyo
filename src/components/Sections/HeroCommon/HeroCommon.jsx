import React from 'react'
import herobg from '../../../assets/images/services/services.jpg'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroCommon = ({ title, url}) => {
  return (
    <section className='mt-16 sm:mt-14 md:mt-20 w-full'>
        <div style={{backgroundImage: `url(${herobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }} 
                className='w-full h-[350px] relative'>
        {/* <div className="w-full h-full" style={{backgroundColor:'#658cbfbc'}}></div> */}
        <div className="w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <div className='flex flex-col justify-center items-center h-full w-full absolute top-0'>
            <h2 className='text-[42px] poppins-semibold text-white'>{title}</h2>
            <div className='flex items-center gap-3'>
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="/">TECHKYO</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#ccc]' />
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="#">Pages</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#fff]' />
            <Link className='poppins-medium text-base text-[#fff]' to="#">{url}</Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroCommon