import { Building, ChevronRight, HardDrive, LucideHouse, ShoppingCart } from 'lucide-react';
import React from 'react'

const Sectors = () => {
    const sectors = [
        {
            icon: <ShoppingCart className='w-10 h-10 text-[#1f276e]' />,
            title: 'Rental',
            desc: 'Our client, a large US Sports manufacturer and retailer, wanted to carry out a complete site audit and health check throughout their EMEA estate.',
            link: '#',
        },
        {
            icon: <Building className='w-10 h-10 text-[#1f276e]' />,
            title: 'Enterprise',
            desc: 'A large Global bank housed in multiple countries across Europe requested us to assist them with the upgrade of their unified collaboration solution in four of their largest locations.',
            link: '#',
        },
        {
            icon: <HardDrive className='w-10 h-10 text-[#1f276e]' />,
            title: 'Data Center',
            desc: 'Our Datacenter services range from simple cable patching right up to the hardware build, install and support.',
            link: '#',
        },
    ];
  return (
    <section className='w-[93%] m-auto my-20 py-10 sm:py-20 rounded-[40px] bg-[#f0f1f5]'>
        {/* <div className='flex gap-10'> */}
            <div className='w-full px-3 sm:px-10 text-center'>
                <h3 className='poppins-semibold text-[40px] text-[#1f276e]'>Sectors</h3>
                <p className='poppins-regular text-[18px] text-[#455882] py-5 lg:px-40'>Our expertise spans retail, enterprise, data center, carrier network, manufacturing, and government sectors, offering customized solutions to address a wide range of requirements.</p>
                <div className='flex justify-center mb-10'>
                    <button className='flex items-center cursor-pointer gap-3 poppins-medium text-[15px] bg-[#1f276e] py-3 px-5 rounded-[50px] text-white'>View All <ChevronRight className='w-5 h-5 text-white' /></button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 sm:mx-20'>
                {sectors.map((s, idx) => (
                    <div key={idx} className='rounded-lg group hover:shadow-[0_8px_90px_4px_rgba(38,42,76,0.1)] shadow-[0_5px_70px_rgba(38,42,76,0.1)] bg-white p-6 flex flex-col items-start justify-between gap-6 h-full'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center w-fit justify-center p-5 bg-[#f2f3ff] rounded-[12px]'>
                                {s.icon}
                            </div>
                            <h2 className='poppins-semibold text-[22px] text-[#1f276e]'>{s.title}</h2>
                            <p className='poppins-regular text-[15px] text-[#696969]'>{s.desc}</p>
                        </div>
                        <button className='poppins-medium cursor-pointer text-[15px] group-hover:text-[#1f276e] text-[#b0b0b0]' style={{justifySelf: 'end'}}>Learn More</button>
                    </div>
                ))}
            </div>
        {/* </div> */}
    </section>
  )
}

export default Sectors