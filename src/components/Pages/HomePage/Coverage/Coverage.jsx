import React from 'react'
import maps from '../../../../assets/images/map.jpg'
import clients1 from '../../../../assets/images/apc.png'
import clients2 from '../../../../assets/images/deckers.png'
import clients3 from '../../../../assets/images/crocs.png'
import clients4 from '../../../../assets/images/hollister.png'
import clients5 from '../../../../assets/images/kate.jpg'
import clients6 from '../../../../assets/images/gap.png'

const Coverage = () => {

    const coverage = [
    {
        text: "JAPAN",
        width: 85,
    },
    {
        text: "PAKISTAN",
        width: 75,
    },
    {
        text: "EMEA",
        width: 100,
    },
    {
        text: "APAC",
        width: 65,
    },
    {
        text: "AUSTRALIA",
        width: 75,
    }
    ]
    const clients = [clients1, clients2, clients3, clients4, clients5, clients6]
  return (
    <section className='w-[92%] md:w-[80%] m-auto'>
        <div className='flex flex-col items-center'>
            <h1 className='poppins-semibold w-fit text-[40px] text-[#1f276e] border-b border-[#e8e8e8] pb-4'>OUR COVERAGE</h1>
            <p className='poppins-regular text-[15px] text-[#696969] py-5 lg:px-40'>We offer our services at a global level, and we have ability to cover almost all locations.</p>
        </div>
        <div className='flex gap-10 w-full items-center mt-4'>
            <div className='w-[70%]'>
                <img src={maps} alt="maps coverage" />
            </div>
            <div className='w-[30%]'>
                {coverage.map((c, idx) => (
                <div key={idx} className='flex flex-col relative gap-5 mb-4 w-full rounded-[3px] bg-[#f7f7f7]' style={{boxShadow: "0 1px 2px rgba(0, 0, 0, .1) inset"}}>
                    <div className={`bg-[#0074cc] h-full absolute top-0 left-0 z-[1]`} style={{width: `${c.width}%`}}></div>
                    <p className='poppins-regular text-[13px] px-4 py-3 text-white relative z-3'>{c.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col items-center mt-20'>
            <h1 className='poppins-semibold w-fit text-[40px] text-[#1f276e] border-b border-[#e8e8e8] pb-4'>CLIENTS</h1>
            <p className='poppins-regular text-[15px] text-[#696969] py-5 lg:px-40'>Some of our awesome clients we’ve had great pleasure working with!</p>
        </div>
        <div className='flex items-center my-16 mb-[15rem] gap-12'>
            {clients.map((c) => (
                <div className='w-[12%]'>
                <img src={c} alt="clients" />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Coverage