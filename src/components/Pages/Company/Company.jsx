import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import HeroCommon from '../../Sections/HeroCommon/HeroCommon'
import TheCompany from '../HomePage/TheCompany/TheCompany'
import { Brain, ChevronRight, CircleCheck, Heart, Key } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import vision from '../../../assets/images/vision.jpg'
import { ArrowRight, Cable, HardDrive, HeadphonesIcon, Wifi } from 'lucide-react';
import Footer from '../../Sections/Footer/Footer'


const Company = () => {
    const navigate = useNavigate();

     const services = [
        {
            icon: <Heart className='w-10 h-10 text-[#fff]' />,
            title: 'Honesty and Integrity',
            desc: 'We stand by our ethos, say what you are going to do and then deliver upon it. If we can’t do it we will tell you we can’t.',
        },
        {
            icon: <Brain className='w-10 h-10 text-[#fff]' />,
            title: 'Empathy and Diligence',
            desc: 'We will understand your position then work with you until it is brought to a satisfactory conclusion.',
        },
        {
            icon: <CircleCheck className='w-10 h-10 text-[#fff]' />,
            title: 'Be Prepared',
            desc: 'We will always be prepared to do what is required to get the job done in a timely and professional manner.',
        },
        {
            icon: <Key className='w-10 h-10 text-[#fff]' />,
            title: 'Trust',
            desc: 'Our relationships are built on trust, trust to deliver what we say we will deliver. it’s quite simple if there’s no trust then there’s no relationship.',
        },
    ];

  return (
    <div>
        <Navbar/>
        <HeroCommon title="COMPANY" url="COMPANY" />
        <TheCompany/>
        {/* mission statement */}
        <section className='my-20 bg-[#f0f1f5]'>
            <div className='flex flex-col gap-6 h-[350px] w-[80%] m-auto items-center text-center justify-center'>
                <h2 className='poppins-semibold text-[30px] sm:text-[38px] text-[#1f276e]'>Mission Statement</h2>
                <p className='poppins-regular text-[15px] sm:text-[18px] text-[#7a7d8c]'>“To provide exceptional technical support and innovative solutions to our clients worldwide. We strive to keep their IT systems running seamlessly, enabling them to focus on their core business.”</p>
                <button className='bg-[#1f276e] px-5 py-3 rounded-[50px] text-white poppins-medium flex items-center gap-3'>Get in touch
                    <ChevronRight className='w-5 h-5 text-white' />
                </button>
            </div>
        </section>
        {/* vision statement */}
        <section className='my-20'>
            <div className='flex gap-6 h-[350px] w-[80%] m-auto items-center text-left justify-between'>
                <div className='w-full sm:w-[50%] flex flex-col gap-6'>
                <h2 className='poppins-semibold text-[30px] sm:text-[38px] text-[#1f276e]'>Vision Statement</h2>
                <p className='poppins-regular text-[15px] sm:text-[18px] text-[#7a7d8c]'>“We envision Htech Supports as the go-to for organizations seeking reliable, forward-thinking IT services. Our commitment to excellence, agility, and global reach positions us as leaders in the industry, driving digital transformation and technological advancements.”</p>
                <button onClick={() => navigate('/services')} className='w-fit bg-[#1f276e] px-5 py-3 rounded-[50px] text-white poppins-medium flex items-center gap-3'>Our services
                    <ChevronRight className='w-5 h-5 text-white' />
                </button>
                </div>
                <div className='w-full sm:w-[50%] flex items-center justify-end'>
                    <img className='rounded-[12px]' src={vision} alt="icon" />
                </div>
            </div>
        </section>
        {/* why techkyo */}
        <section className='my-20'>
            <section className='w-[80%] m-auto py-24'>
            <h2 className='poppins-semibold text-[40px] text-[#1f276e] text-center'>WHY Techkyo SUPPORT</h2>
        <p className='poppins-light text-xl text-[#696969] text-center my-4'>You can always count on Htech support because we know the values.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
            {services.map((s, idx) => (
                <div key={idx} className='py-8 px-3 bg-[#1e236b] rounded-lg flex flex-col items-center justify-between gap-5 mt-6'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-center'>{s.icon}</div>
                        <h3 className='poppins-medium text-[24px] sm:text-[28px] text-white text-center'>{s.title}</h3>
                        <h4 className='poppins-light text-[15px] text-white text-center'>{s.desc}</h4>
                    </div>
                </div>
            ))}
        </div>
    </section>
        </section>
        <Footer/>
    </div>
  )
}

export default Company