import React from 'react'
import serv1 from '../../../../assets/images/sectors/retail.jpg'
import serv2 from '../../../../assets/images/sectors/enterprise.jpg'
import serv3 from '../../../../assets/images/sectors/datacenter.jpg'
import network from '../../../../assets/images/sectors/network.jpg'
import structure from '../../../../assets/images/sectors/manufact.jpg'
import Telecomm from '../../../../assets/images/sectors/s22.png'
import enduser from '../../../../assets/images/sectors/govt.jpg'
import health from '../../../../assets/images/sectors/health.jpg'
import finance from '../../../../assets/images/sectors/finance.jpg'
import logistic from '../../../../assets/images/sectors/logistic.jpg'
import hospitality from '../../../../assets/images/sectors/hospitality.jpg'
import estate from '../../../../assets/images/sectors/estate.jpg'
import education from '../../../../assets/images/sectors/education.jpg'
import pharma from '../../../../assets/images/sectors/pharma.jpg'
import ngos from '../../../../assets/images/sectors/ngos.jpg'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const SectorsData = () => {

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

  const sectors = [
  {
    title: 'Retail',
    desc: "We deliver tailored IT solutions to retail businesses, enhancing POS systems, inventory management, and customer engagement. Our services ensure seamless operations across eCommerce, physical stores, and omnichannel experiences.",
    link: '#',
    media: serv1,
  },
  {
    title: 'Enterprise',
    desc: "We empower enterprises with secure, scalable, and cost-effective IT solutions. From cloud infrastructure and cybersecurity to end-user computing, we help businesses optimize efficiency and stay competitive.",
    link: '#',
    media: serv2,
  },
  {
    title: 'Datacenter Services',
    desc: "Our datacenter services include setup, migration, optimization, and management of infrastructure. We ensure high availability, scalability, and security for mission-critical workloads.",
    link: '#',
    media: serv3,
  },
  {
    title: 'Carrier Network',
    desc: "We provide network solutions for carriers and ISPs, including structured cabling, network security, and reliable backbone connectivity to support high-demand users worldwide.",
    link: '#',
    media: network,
  },
  {
    title: 'Manufacturing',
    desc: "We support manufacturers with IT-enabled automation, IoT integration, and real-time monitoring solutions. Our services improve efficiency, reduce downtime, and optimize supply chain operations.",
    link: '#',
    media: structure,
  },
  {
    title: 'Government',
    desc: "We deliver secure, scalable, and compliant IT services to government institutions. From modernization projects to cybersecurity, we help agencies provide uninterrupted services with minimal disruption.",
    link: '#',
    media: enduser,
  },
  {
    title: 'Healthcare',
    desc: "We provide IT solutions for hospitals, clinics, and healthcare providers, including electronic health records (EHR), secure patient data management, and telemedicine platforms that improve patient care.",
    link: '#',
    media: health,
  },
  {
    title: 'Education',
    desc: "Our IT services for schools, colleges, and universities include e-learning platforms, smart classrooms, campus networking, and secure data systems to support digital transformation in education.",
    link: '#',
    media: education,
  },
  {
    title: 'Banking & Financial Services',
    desc: "We deliver secure and compliant IT solutions for banks and financial institutions. From cybersecurity and fraud prevention to mobile banking and cloud migration, we ensure smooth financial operations.",
    link: '#',
    media: finance,
  },
  {
    title: 'Logistics & Transportation',
    desc: "Our IT solutions optimize fleet management, tracking systems, warehouse automation, and logistics coordination to ensure timely delivery and efficiency across global supply chains.",
    link: '#',
    media: logistic,
  },
  {
    title: 'Hospitality',
    desc: "We support hotels, restaurants, and resorts with smart IT solutions such as booking systems, contactless payments, guest WiFi, and data-driven insights to enhance customer satisfaction.",
    link: '#',
    media: hospitality,
  },
//   {
//     title: 'Energy & Utilities',
//     desc: "We deliver IT-enabled automation and monitoring solutions for energy companies and utilities. Our services include smart grids, IoT-based monitoring, and predictive maintenance.",
//     link: '#',
//     media: enduser,
//   },
  {
    title: 'Telecommunications',
    desc: "We provide IT solutions for telecom companies to enhance connectivity, network performance, and customer support systems while ensuring data security and high service availability.",
    link: '#',
    media: Telecomm,
  },
  {
    title: 'Non-Profit Organizations',
    desc: "We help NGOs and non-profits with cost-effective IT solutions such as donor management systems, cloud hosting, and secure communications to maximize impact while reducing costs.",
    link: '#',
    media: ngos,
  },
  {
    title: 'Construction & Real Estate',
    desc: "Our IT services for construction and real estate include project management tools, 3D modeling support, virtual collaboration platforms, and secure data storage for property records.",
    link: '#',
    media: estate,
  },
  {
    title: 'Pharmaceuticals & Life Sciences',
    desc: "We support pharmaceutical companies with IT systems for research, supply chain compliance, and secure data management to accelerate innovation while meeting strict regulations.",
    link: '#',
    media: pharma,
  }
];

  return (
    <section className='w-[92%] md:w-[80%] m-auto'>
        {sectors.map((s, idx) => {
        const isEven = idx % 2 === 0; // odd/even layout
            return (
                <div className='my-30'>
                {isEven ? (
                    <div
                    ref={(el) => (refs.current[s.title] = el)} // store ref
                    className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5' dangerouslySetInnerHTML={{ __html: s.desc }} />
                            <button onClick={() => navigate("/contact")} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                        <div className='w-full md:w-[55%] max-h-[450px] mt-4 md:mt-0'>
                            <img className='rounded-xl' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                    </div>
                ) : (
                    <div
                    ref={(el) => (refs.current[s.title] = el)} // store ref
                    className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[55%] max-h-[450px] mb-4 md:mb-0'>
                            <img className='rounded-xl' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5' dangerouslySetInnerHTML={{ __html: s.desc }} />
                            {/* <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p> */}
                            <button onClick={() => navigate("/contact")} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                    </div>
                )}
                </div>
            )
        })}
    </section>
  )
}

export default SectorsData