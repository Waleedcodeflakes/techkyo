import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import maps from '../../../../assets/images/map-text.png'
import clients1 from '../../../../assets/images/partners/partners (1).jpg'
import clients30 from '../../../../assets/images/partners/partners (1).png'
import clients2 from '../../../../assets/images/partners/partners (2).png'
import clients3 from '../../../../assets/images/partners/partners (3).png'
import clients4 from '../../../../assets/images/partners/partners (4).png'
import clients5 from '../../../../assets/images/partners/partners (5).png'
import clients6 from '../../../../assets/images/partners/partners (6).png'
import clients7 from '../../../../assets/images/partners/partners (7).png'
import clients8 from '../../../../assets/images/partners/partners (8).png'
import clients9 from '../../../../assets/images/partners/partners (9).png'
import clients10 from '../../../../assets/images/partners/partners (10).png'
import clients11 from '../../../../assets/images/partners/partners (11).png'
import clients12 from '../../../../assets/images/partners/partners (12).png'
import clients13 from '../../../../assets/images/partners/partners (13).png'
import clients14 from '../../../../assets/images/partners/partners (14).png'
import clients15 from '../../../../assets/images/partners/partners (15).png'
import clients16 from '../../../../assets/images/partners/partners (16).png'
import clients17 from '../../../../assets/images/partners/partners (17).png'
import clients18 from '../../../../assets/images/partners/partners (18).png'
import clients19 from '../../../../assets/images/partners/partners (19).png'
import clients20 from '../../../../assets/images/partners/partners (20).png'
import clients21 from '../../../../assets/images/partners/partners (21).png'
import clients22 from '../../../../assets/images/partners/partners (22).png'
import clients23 from '../../../../assets/images/partners/partners (23).png'
import clients24 from '../../../../assets/images/partners/partners (24).png'
import clients25 from '../../../../assets/images/partners/partners (25).png'
import clients26 from '../../../../assets/images/partners/partners (26).png'
import clients28 from '../../../../assets/images/partners/partners (28).png'
import clients29 from '../../../../assets/images/partners/partners (29).png'

const Coverage = () => {

    const coverage = [
    {
        text: "NORTH AMERICA",
        width: 85,
        color: '#a3811c',
    },
    {
        text: "LATAM",
        width: 75,
        color: '#204231',
    },
    {
        text: "EMEA",
        width: 100,
        color: '#3651a3',
    },
    {
        text: "APAC",
        width: 65,
        color: '#633d20',
    },
    {
        text: "JAPAN",
        width: 75,
        color: '#5fad9f',
    },
    {
        text: "AUSTRALIA",
        width: 85,
        color: '#a3811c',
    }
    ]
    const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8, clients9, clients10, clients11, clients12, clients13, clients14, clients15, clients16,
        clients17,clients18,clients19,clients20,clients21,clients22,clients23,clients24,clients25,clients26,clients28,clients29,clients30,
    ]

    const sliderRef = useRef(null);

 const scroll = (direction) => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;

    const scrollAmount = clientWidth * 0.8; // move ~80% width
    sliderRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
    <section className='w-[92%] md:w-[80%] m-auto'>
        <div className='flex flex-col items-center'>
            <h1 className='poppins-semibold w-fit text-[40px] text-[#1f276e] border-b border-[#e8e8e8] pb-4'>OUR COVERAGE</h1>
            <p className='poppins-regular text-[15px] text-[#696969] py-5 lg:px-40'>We offer our services at a global level, and we have ability to cover almost all locations.</p>
        </div>
        <div className='block sm:flex gap-10 w-full items-center mt-4'>
            <div className='w-full sm:w-[70%]'>
                <img src={maps} alt="maps coverage" />
            </div>
            <div className='w-full mt-7 sm:mt-0 sm:w-[30%]'>
                {coverage.map((c, idx) => (
                <div key={idx} className='flex flex-col relative gap-5 mb-4 w-full rounded-[3px] bg-[#f7f7f7]' style={{boxShadow: "0 1px 2px rgba(0, 0, 0, .1) inset"}}>
                    <div className={`bg-[#0074cc] h-full absolute top-0 left-0 z-[1]`} style={{width: `${c.width}%`, background: `${c.color}`}}></div>
                    <p className='poppins-regular text-[13px] px-4 py-3 text-white relative z-3'>{c.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col items-center mt-20'>
            <h1 className='poppins-semibold w-fit text-[40px] text-[#1f276e] border-b border-[#e8e8e8] pb-4'>CLIENTS</h1>
            <p className='poppins-regular text-[15px] text-[#696969] py-5 lg:px-40 text-center'>Some of our awesome clients we’ve had great pleasure working with!</p>
        </div>
    </section>
    <div className='overflow-x-auto'>
        {/* <div className='flex items-center w-[1000px] sm:w-[80%] m-auto pl-5 my-16 mb-[15rem] gap-12 min-h-full'>
            {clients.map((c) => (
                <div className='w-[100%] sm:w-[20%] md:w-[12%]'>
                <img src={c} alt="clients" />
                </div>
            ))}
        </div> */}
       <div className="relative w-full max-w-[1100px] mx-auto my-16 mb-[15rem]">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-4rem] top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-[#1f276e]" />
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-10 overflow-x-hidden scroll-smooth px-8"
      >
        {clients.map((c, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[160px] sm:w-[140px] md:w-[120px]"
          >
            <img
              src={c}
              alt="client"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-[-4rem] top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-[#1f276e]" />
      </button>
    </div>
    </div>
    </>
  )
}

export default Coverage