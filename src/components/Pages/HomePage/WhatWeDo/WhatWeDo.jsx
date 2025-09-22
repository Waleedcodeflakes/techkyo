import React from 'react'
import { ArrowRight, Cable, GraduationCap, Handshake, Layers, MonitorSmartphone, Server, ShieldCheck, Wifi } from 'lucide-react';

const WhatWeDo = () => {

    const services = [
        {
            icon: <Handshake className='w-10 h-10 text-[#fff]' />,
            title: 'Professional Service',
            desc: 'Creating a dynamic and engaging audio-visual experience requires skilled professionals and a seamless integration process. We offer comprehensive AV installation ..',
            link: '#'
        },
        {
            icon: <Wifi className='w-10 h-10 text-[#fff]' />,
            title: 'Wireless Survey',
            desc: 'Optimize Your Wireless Network with Ekahau Surveys -Performed by a Certified Partner Looking to improve your Wi-Fi performance? We’re a proud official partner of ..',
            link: '#'
        },
        {
            icon: <Server className='w-10 h-10 text-[#fff]' />,
            title: 'Network Support',
            desc: 'Maintaining a robust and reliable network infrastructure is essential for any business today. We offer a comprehensive suite of services to keep your network ..',
            link: '#'
        },
        {
            icon: <Cable className='w-10 h-10 text-[#fff]' />,
            title: 'Structured Cabling',
            desc: 'A well-designed and organized network cabling system is the backbone of any successful IT infrastructure. It provides a reliable foundation for data transmission,..',
            link: '#'
        },
        {
            icon: <GraduationCap className='w-10 h-10 text-[#fff]' />,
            title: 'IT Training',
            desc: 'Techkyo’s IT Training services are designed to upskill your workforce with the latest industry practices, ensuring they are prepared to manage complex IT environments effectively..',
            link: '#'
        },
        {
            icon: <ShieldCheck className='w-10 h-10 text-[#fff]' />,
            title: 'CYbersecurity',
            desc: 'Optimize Your Wireless Network with Ekahau Surveys -Performed by a Certified Partner Looking to improve your Wi-Fi performance? We’re a proud official partner of ..',
            link: '#'
        },
        {
            icon: <Layers className='w-10 h-10 text-[#fff]' />,
            title: 'Virtualization Services',
            desc: 'Modern enterprises demand flexibility, scalability, and cost efficiency in their IT infrastructure. Techkyo’s Virtualization Services empower businesses to maximize hardware utilization, reduce costs, and improve operational agility..',
            link: '#'
        },
        {
            icon: <MonitorSmartphone className='w-10 h-10 text-[#fff]' />,
            title: 'Web & App Development',
            desc: 'At Techkyo, we design and develop websites and applications that power business growth, improve efficiency, and deliver exceptional user experiences..',
            link: '#'
        },
    ];

  return (
        <section className='w-[92%] sm:w-[80%] m-auto py-24 border-b border-[#e8e8e8]'>
            <h2 className='poppins-semibold text-[40px] text-[#1f276e] text-center'>WHAT WE DO</h2>
        <p className='poppins-light text-xl text-[#696969] text-center my-4'>Techkyo has a strong global presence, delivering solutions across more than 50 countries. Our engineers, many of whom are multi lingual, range from level 1 through to level 3 across a broad spectrum of vendor technologies and we pride ourselves on being able to assist in almost any situation.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-6'>
            {services.map((s, idx) => (
                <div key={idx} className='py-8 px-3 bg-[#1e236b] rounded-lg flex flex-col items-center justify-between gap-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-center'>{s.icon}</div>
                        <h3 className='poppins-medium text-xl text-white text-center'>{s.title}</h3>
                        <h4 className='poppins-light text-base text-white text-center'>{s.desc}</h4>
                    </div>
                    <button className='poppins-medium group mt-3 text-base cursor-pointer text-white text-center flex items-center gap-2'>Read More <ArrowRight className='w-5 h-5 text-[#fff] group-hover:transform-110 transiton-all duration-200' /></button>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhatWeDo