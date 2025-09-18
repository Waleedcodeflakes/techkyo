import React from 'react'
import serv1 from '../../../../assets/images/services/professional-services.jpg'
import serv2 from '../../../../assets/images/services/wireless.jpg'
import serv3 from '../../../../assets/images/services/helpdesk.webp'
import network from '../../../../assets/images/services/network.webp'
import structure from '../../../../assets/images/services/structure.jpg'
import enduser from '../../../../assets/images/services/enduser.jpg'
import asset from '../../../../assets/images/services/asset.jpg'
import staff from '../../../../assets/images/services/staff.jpg'
import cyber from '../../../../assets/images/services/cyber.jpg'
import retail from '../../../../assets/images/services/retail.avif'
import av from '../../../../assets/images/services/av.avif'
import { ArrowRight } from 'lucide-react'

const ServicesData = () => {
    const services = [
        {
            title: 'Professional Service',
            desc: 'Bringing Your Vision to Life: Professional AV Installation and Remote Support Services Creating a dynamic and engaging audio-visual experience requires skilled professionals and a seamless integration process. We offer comprehensive AV installation services, coupled with remote IT deployment support, to ensure your project is completed efficiently and according to your specific needs.',
            link: '#',
            media: serv1,
        },
        {
            title: 'Wireless Survey',
            desc: 'Optimize Your Wireless Network with Ekahau Surveys -Performed by a Certified Partner Looking to improve your Wi-Fi performance? We’re a proud official partner of Ekahau, a leader in Wi-Fi network optimization solutions. Our team of experts can conduct a comprehensive Ekahau survey to identify and address any issues impacting your wireless network.',
            link: '#',
            media: serv2,
        },
        {
            title: 'Helpdesk Solutions',
            desc: "Gaichu offers 24/7 NOC and Helpdesk Solutions, providing cost-effective IT support services. Our NOC team consists of project managers and support staff who manage IT related problems providing proactive monitoring, troubleshooting, triage, resource identification, parts numbers, and action plans. Techkyo's support teams are on hand 24/7, ensuring customer satisfaction.",
            link: '#',
            media: serv3,
        },
        {
            title: 'Network Support',
            desc: 'Maintaining a robust and reliable network infrastructure is essential for any business today. We offer a comprehensive suite of services to keep your network running smoothly, from planning and installation to troubleshooting and maintenance. Here’s how our team of experts can support your IT needs:',
            link: '#',
            media: network,
        },
        {
            title: 'Structured Cabling',
            desc: 'A well-designed and organized network cabling system is the backbone of any successful IT infrastructure. It provides a reliable foundation for data transmission, voice communication, and security systems. Our team of experts offers a comprehensive range of cabling and connectivity solutions to meet your specific needs.',
            link: '#',
            media: structure,
        },
        {
            title: 'End User Computing Support',
            desc: 'Technology is an essential tool for business success, but technical issues can disrupt your workflow and cost valuable time. Our comprehensive IT support services ensure your systems run smoothly, allowing you to focus on what matters most – your business.',
            link: '#',
            media: enduser,
        },
        {
            title: 'IT Asset Disposal',
            desc: 'Supporting Your Transitions: Seamless Site Closure, Relocation & Device Disposal Solutions As your business evolves, you may face the need to close a site, relocate to a new location, or dispose of outdated equipment. We understand the complexities involved in managing these transitions and offer comprehensive services to ensure a smooth and secure process.',
            link: '#',
            media: asset,
        },
        {
            title: 'Staff Augmentation',
            desc: 'Building a Strong Foundation: Network Cabling and Connectivity Solutions in today’s globalized business environment, maintaining seamless technology operations across multiple locations is crucial. We offer comprehensive global dispatch and on-site tech support services to ensure your IT infrastructure stays up and running no matter where your business operates.',
            link: '#',
            media: staff,
        },
        {
            title: 'Retail Support',
            desc: 'In today’s world a simple loss of connectivity means lost sales and customers. Gaichu’s technical team minimizes downtime to keep our customers operational. We support all kinds of installations from footfall counters, electronic point of sales, desktop, servers, switches, UPS, etc. When required, onsite engineers are available on demand to ensure exceptional customer experience.',
            link: '#',
            media: retail,
        },
        {
            title: 'Global Deployments',
            desc: 'Our team of experts have extensive experience in deploying desktops, servers and network devices globally. We can help with the planning and execution of services and provide the customer with greater savings as well as fast deployment.',
            link: '#',
            media: serv1,
        },
        {
            title: 'AV Technology',
            desc: 'We at Gaichu specialize in audio video installations. Our team of experts can install and deploy AV equipment in any environment including offices, healthcare facilities, schools and so much more. We have helped many customers with CISCO telepresence as well as zoom room installations, giving them fast, reliable and flexible services to meet their ever-changing needs.',
            link: '#',
            media: av,
        },
        {
            title: 'Cybersecurity Solutions',
            desc: 'With the increasing reliance on computers, networks, programmes, social media, and global data, organisations are facing a growing vulnerability to cyber threats on a daily basis. Gaichu Cybersecurity Solutions, powered by Overwatch, offer comprehensive protection for your business against cyberthreats.',
            link: '#',
            media: cyber,
        },
        // {
        //     title: '',
        //     desc: '',
        //     link: '#',
        //     media: serv1,
        // },
    ];
  return (
    <section className='w-[92%] md:w-[80%] m-auto'>
        {services.map((s, idx) => {
        const isEven = idx % 2 === 0; // odd/even layout
            return (
                <div className='my-30'>
                {isEven ? (
                    <div className='flex items-center gap-10'>
                        <div className='w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
                            <button className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                        <div className='w-[55%] max-h-[400px]'>
                            <img className='rounded-xl' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-10'>
                        <div className='w-[55%] max-h-[400px]'>
                            <img className='rounded-xl' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                        <div className='w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
                            <button className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
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