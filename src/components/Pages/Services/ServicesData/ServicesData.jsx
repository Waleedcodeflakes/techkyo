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
import ser1 from '../../../../assets/images/services/s1.png'
import ser2 from '../../../../assets/images/services/s2.png'
import ser3 from '../../../../assets/images/services/s3.png'
import ser4 from '../../../../assets/images/services/s4.png'
import ser5 from '../../../../assets/images/services/s5.png'
import ser6 from '../../../../assets/images/services/s6.png'
import ser7 from '../../../../assets/images/services/s7.png'
import ser8 from '../../../../assets/images/services/s8.png'
import ser9 from '../../../../assets/images/services/s9.png'
import ser10 from '../../../../assets/images/services/s10.png'
import ser11 from '../../../../assets/images/services/s11.png'
import ser12 from '../../../../assets/images/services/s12.png'
import ser13 from '../../../../assets/images/services/s13.png'
import ser14 from '../../../../assets/images/services/s14.png'
import ser15 from '../../../../assets/images/services/s15.png'
import ser16 from '../../../../assets/images/services/s16.png'
import ser17 from '../../../../assets/images/services/s17.png'
import ser18 from '../../../../assets/images/services/s18.png'
import ser19 from '../../../../assets/images/services/s19.png'
import ser20 from '../../../../assets/images/services/s20.png'
import ser21 from '../../../../assets/images/services/s21.jpg'

import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ServicesData = () => {

    const navigate = useNavigate();
    const services = [
        {
            title: 'IT Training',
            desc: 'In today’s technology-driven world, a skilled and knowledgeable team is essential for maintaining efficiency, security, and business growth. Eaze-IT’s IT Training services are designed to upskill your workforce with the latest industry practices, ensuring they are prepared to manage complex IT environments effectively.',
            link: '#',
            media: ser1,
        },
        {
            title: 'Project Management And Consulting',
            desc: 'Our Project Management and Consulting services help businesses deliver projects on time, within budget, and aligned with strategic goals. From initial planning to execution and evaluation, Eaze-IT provides end-to-end guidance, risk management, and hands-on expertise. With structured methodologies and industry best practices, we empower organizations to achieve results with confidence and efficiency.',
            link: '#',
            media: ser2,
        },
        {
            title: 'Outsourcing & Remote Staffing',
            desc: 'Our Outsourcing & Remote Staffing service helps organizations build flexible, skilled, and reliable teams without the overhead of in-house hiring. Whether you need short-term specialists, long-term dedicated staff, or full-function remote teams, Eaze-IT ensures you get top talent tailored to your business needs. With our structured processes, you gain efficiency, cost savings, and the ability to focus on your core operations while we manage the resources.',
            link: '#',
            media: ser3,
        },
        {
            title: 'Staffing & Recruitment Solutions',
            desc: 'Finding the right talent is critical for business growth and sustainability. Without the right people, even the best strategies can fall short. Our Staffing & Recruitment Solutions help organizations attract, hire, and retain the talent they need to succeed. Whether you require temporary staff, permanent hires, or specialized IT professionals, Eaze-IT delivers tailored recruitment strategies that align with your organizational goals.',
            link: '#',
            media: ser4,
        },
        {
            title: 'Virtualization Services',
            desc: 'Modern enterprises demand flexibility, scalability, and cost efficiency in their IT infrastructure. Eaze-IT’s Virtualization Services empower businesses to maximize hardware utilization, reduce costs, and improve operational agility. By consolidating resources and creating virtual environments, we help your business scale seamlessly, respond faster to change, and strengthen overall IT resilience.',
            link: '#',
            media: ser5,
        },
        {
            title: 'Secured Warehousing',
            desc: 'In today’s data-driven world, safeguarding IT hardware and business assets requires more than just physical storage—it demands a secure, compliant, and reliable environment. Eaze-IT’s Secure Warehouse service provides enterprises with a trusted facility for safe equipment storage, inventory management, and disaster recovery preparedness.',
            link: '#',
            media: ser6,
        },
        {
            title: 'Software Quality Assurance & Testing',
            desc: 'In today’s competitive digital landscape, even the smallest software flaws can lead to costly disruptions, security vulnerabilities, or a poor user experience. Our Software Quality Assurance & Testing service ensures your applications meet the highest standards of functionality, performance, and security before reaching your users.',
            link: '#',
            media: ser7,
        },
        {
            title: 'IT Hardware Procurement',
            desc: 'Efficient IT operations start with the right hardware. At Eaze-IT, we simplify IT hardware procurement by sourcing, supplying, and managing the technology your business needs to stay ahead. From servers and storage to networking and end-user devices, we provide reliable hardware tailored to your unique requirements.',
            link: '#',
            media: ser8,
        },
        {
            title: 'Web & Application Development',
            desc: 'Your business deserves more than just an online presence—it needs a digital platform that is secure, scalable, and tailored to your goals. At Eaze-IT, we design and develop websites and applications that power business growth, improve efficiency, and deliver exceptional user experiences.',
            link: '#',
            media: ser9,
        },
        {
            title: 'Mobile App Development',
            desc: 'In today’s mobile-first world, businesses need apps that engage customers, streamline operations, and enable growth. At Eaze-IT, we specialize in building custom mobile applications that combine functionality, security, and user-friendly design—ensuring your business stays connected anytime, anywhere.',
            link: '#',
            media: ser10,
        },
        {
            title: 'Custom Software Development',
            desc: 'In today’s competitive business landscape, off-the-shelf solutions often fail to address unique operational needs. That’s why Eaze-IT provides Custom Software Development designed specifically for your organization. From streamlining processes to enabling growth, our tailored applications deliver efficiency, scalability, and measurable results.',
            link: '#',
            media: ser16,
        },
        {
            title: 'Security Operations',
            desc: 'In today’s digital-first business landscape, cybersecurity is no longer optional—it’s essential. Every second of downtime or vulnerability can expose your business to threats, compliance risks, and financial loss. Eaze-IT’s Security Operations services provide 24/7 monitoring, advanced threat detection, and rapid response to safeguard your IT infrastructure. With continuous coverage, we ensure your business remains secure, compliant, and resilient against evolving cyber threats.',
            link: '#',
            media: ser12,
        },
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
        //     media: ser1,
        // },
    ];
  return (
    <section className='w-[92%] md:w-[80%] m-auto'>
        {services.map((s, idx) => {
        const isEven = idx % 2 === 0; // odd/even layout
            return (
                <div className='my-30'>
                {isEven ? (
                    <div className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
                            <button onClick={() => navigate("/contact")} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                        <div className='w-full md:w-[55%] max-h-[400px]'>
                            <img className='rounded-xl w-full h-full' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                    </div>
                ) : (
                    <div className='block md:flex items-center gap-10'>
                        <div className='w-full md:w-[55%] max-h-[400px]'>
                            <img className='rounded-xl w-full h-full' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                        <div className='w-full md:w-[45%]'>
                            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{s.title}</h2>
                            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{s.desc}</p>
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

export default ServicesData