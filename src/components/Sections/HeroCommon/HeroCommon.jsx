import React from 'react'
import herobg from '../../../assets/images/services/services.webp'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroCommon = ({ title, url}) => {
  return (
    <section className='mt-20 w-full'>
        <div style={{backgroundImage: `url(${herobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }} 
                className='w-full h-[350px] relative'>
        <div className="w-full h-full" style={{backgroundColor:'#658cbfbc'}}></div>
        <div className='flex flex-col justify-center items-center h-full w-full absolute top-0'>
            <h2 className='text-[42px] poppins-semibold text-white'>{title}</h2>
            <div className='flex items-center gap-3'>
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="/">TECHKYO</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#ccc]' />
            <Link className='poppins-medium hover:text-[#1f276e] text-base text-[#fff]' to="#">Pages</Link>
            <ChevronRight className='w-5 h-5 text-base text-[#fff]' />
            <Link className='poppins-medium text-base text-[#fff]' to="#">{url}</Link>
            </div>
            {/* <p className='text-[20px] poppins-medium text-white w-[60%] text-center'>Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth. Please get in touch with us today to learn how Gaichu Managed Services can help your future success.</p> */}
        </div>
        </div>
    </section>
  )
}

export default HeroCommon