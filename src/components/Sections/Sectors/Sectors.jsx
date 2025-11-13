import { Building, Building2, ChevronRight, DollarSign, Handshake, HardDrive, Landmark, LucideHouse, ShoppingCart } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sectors = () => {
    const navigate  = useNavigate();
    const sectors = [
        {
            icon: <ShoppingCart className='w-10 h-10 text-[#1f276e]' />,
            title: 'Commercial & Consumer',
            desc: 'We provide tailored solutions for retail and consumer businesses, helping them improve customer experience, optimize operations, and scale their market reach.',
            link: '#',
        },
        {
            icon: <Building2 className='w-10 h-10 text-[#1f276e]' />, // better than generic "Building"
            title: 'Corporate & Enterprise',
            desc: 'Our enterprise-grade IT and communication solutions support large organizations with global operations, ensuring seamless collaboration and efficiency across regions.',
            link: '#',
        },
        {
            icon: <Landmark className='w-10 h-10 text-[#1f276e]' />, // fits government/public sector
            title: 'Public Sector & Institutions',
            desc: 'We partner with government bodies and educational institutions to deliver secure, reliable, and future-ready digital infrastructure and services.',
            link: '#',
        },
        {
            icon: <DollarSign className='w-10 h-10 text-[#1f276e]' />, // finance + security combined
            title: 'Finance & Regulated Industries',
            desc: 'Our solutions for banking, insurance, and regulated industries ensure compliance, data security, and resilience in highly sensitive environments.',
            link: '#',
        },

    ];
  return (
    <section className='w-[93%] m-auto my-20 py-10 sm:py-20 rounded-[40px] bg-[#f0f1f5]'>
        <div className='block sm:flex gap-10 items-center'>
            <div className='w-full sm:w-[50%] grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 px-3 sm:px-20'>
                {sectors.map((s, idx) => (
                    <div key={idx} className='h-full rounded-lg group hover:shadow-[0_8px_90px_4px_rgba(38,42,76,0.1)] shadow-[0_5px_70px_rgba(38,42,76,0.1)] bg-white p-6 flex flex-col items-start justify-between gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center w-fit justify-center p-5 bg-[#f2f3ff] rounded-[12px]'>
                                {s.icon}
                            </div>
                            <h2 className='poppins-semibold text-[22px] text-[#1f276e]'>{s.title}</h2>
                            <p className='poppins-regular text-[15px] text-[#696969]'>{s.desc}</p>
                        </div>
                        <button onClick={() => navigate('/sectors')} className='poppins-medium cursor-pointer text-[15px] group-hover:text-[#1f276e] text-[#b0b0b0]' style={{justifySelf: 'end'}}>Learn More</button>
                    </div>
                ))}
            </div>
            <div className='w-full sm:w-[50%] px-3 pt-3 sm:pt-0 sm:px-10 text-left'>
                <h3 className='poppins-semibold text-[40px] text-[#1f276e]'>Sectors</h3>
                <p className='poppins-regular text-[18px] text-[#455882] py-5'>Our expertise spans retail, enterprise, data center, carrier network, manufacturing, and government sectors, offering customized solutions to address a wide range of requirements.</p>
                <div className='flex  mb-10'>
                    <button onClick={() => navigate('/sectors')} className='flex  cursor-pointer gap-3 poppins-medium text-[15px] bg-[#1f276e] py-3 px-5 rounded-[50px] text-white'>View All <ChevronRight className='w-5 h-5 text-white' /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sectors