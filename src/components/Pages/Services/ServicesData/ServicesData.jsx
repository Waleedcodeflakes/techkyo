import React from 'react'
import { services } from './servicesData2';

import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const ServicesData = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const refs = useRef({});

    useEffect(() => {
    if (location.state?.scrollTo) {
        const element = refs.current[location.state.scrollTo];
        if (element) {
        setTimeout(() => {
            const yOffset = -100; // 👈 adjust this to your navbar height (px)
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
        }
    }
    }, [location]);
    
    
  return (
    <section className='w-[92%] md:w-[80%] m-auto'>
        {services.map((s, idx) => {
        const isEven = idx % 2 === 0; // odd/even layout
            return (
                <div className='my-30'>
                {isEven ? (
                    <div
                    ref={(el) => (refs.current[s.title] = el)} // store ref
                    className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
                            <button onClick={() => navigate(`/services/${s.id}`)} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                        <div className='w-full md:w-[55%] max-h-[400px] mt-4 md:mt-0'>
                            <img className='rounded-xl w-full h-full' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                    </div>
                ) : (
                    <div
                    ref={(el) => (refs.current[s.title] = el)} // store ref
                    className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[55%] max-h-[400px] mb-4 md:mb-0'>
                            <img className='rounded-xl w-full h-full' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
                            <button onClick={() => navigate(`/services/${s.id}`)} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                    </div>
                )}
                </div>
            )
        })}
    </section>
  )
}

export default ServicesData