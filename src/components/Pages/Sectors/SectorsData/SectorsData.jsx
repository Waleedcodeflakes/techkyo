import React from 'react'
import serv1 from '../../../../assets/images/sectors/retail.jpg'
import serv2 from '../../../../assets/images/sectors/enter.webp'
import serv3 from '../../../../assets/images/sectors/datacenter.jpg'
import network from '../../../../assets/images/sectors/carrier.jpg'
import structure from '../../../../assets/images/sectors/manufact.jpg'
import enduser from '../../../../assets/images/sectors/govt.jpg'
// import asset from '../../../../assets/images/sectors/asset.jpg'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SectorsData = () => {

  const navigate = useNavigate();
  const services = [
          {
              title: 'Retail',
              desc: "Our client, a large US Sports manufacturer and retailer, wanted to carry out a complete site audit and health check throughout their EMEA estate. We engaged with their IT consultants to provide a scope of work, run book and schedule which included a full site asset record.<br/> Our engineers attended site and carried out preventative maintenance across all in scope hardware and recorded all details for the asset register. This included photographing the data cabinets and reporting any potential issues that may have needed to be resolved at a later date. <br/> <br/> On completion all information was passed back to our client and they are now using HTS to resolve any ongoing support issues.",
              link: '#',
              media: serv1,
          },
          {
              title: 'Enterprise',
              desc: 'A large Global bank housed in multiple countries across Europe requested us to assist them with the upgrade of their unified collaboration solution in four of their largest locations. They were moving from an older smaller Cisco solution to the newer higher performing Cisco IX5000 to enable interaction with larger audiences.',
              link: '#',
              media: serv2,
          },
          {
              title: 'Datacenter Services',
              desc: "Our Datacenter services range from simple cable patching right up to the hardware build, install and support.We have the expertise to not just rack and stack the technology but to setup the VM’s and assist with the further configuration where needed. We have full time engineers supporting a number of global organisations in datacenters throughout mainland Europe and those services include hardware troubleshooting and break fix, new server installations, cabling and power management, we are even able to store spare parts to assist in the support process.",
              link: '#',
              media: serv3,
          },
          {
              title: 'Carrier Network',
              desc: 'A leading global service provider required additional resources to assist in the roll out of some network probes to enable fault troubleshooting and testing. This was required across 30 countries and more than 180 sites and required the utilisation of not just our engineers but the resources of our approved partner services.',
              link: '#',
              media: network,
          },
          {
              title: 'Manufacturing',
              desc: 'The end user, a multinational manufacturing organisation, had ongoing issues with the performance of it’s wireless services and was looking at what could be required to improve this. Our consultants worked with the end client to design a change and performance program which would outline a process to a better service.<br/> In doing this we first engaged in testing the installed technology to have an understanding of what the issues were and a baseline to work from.',
              link: '#',
              media: structure,
          },
          {
              title: 'Government',
              desc: 'Our client had a need to update their hardware and to migrate their services to work with Windows 10 across multiple sites for around 2,500 users. Our project team sat with the client to discuss how we could reduce any impact on the operational business and how best to deliver this project.<br/>In doing this it was decided we would deliver this across multiple weekends working collaboratively with the client IT team to ensure that all services were up and running for the following business morning.',
              link: '#',
              media: enduser,
          },
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
                            <p className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5' dangerouslySetInnerHTML={{ __html: s.desc }} />
                            <button onClick={() => navigate("/contact")} className='text-base cursor-pointer text-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Learn More <ArrowRight className='w-5 h-5 text-[#1f276e]' /></button>
                        </div> 
                        <div className='w-full md:w-[55%] max-h-[450px] mt-4 md:mt-0'>
                            <img className='rounded-xl' style={{boxShadow: "0 25px 98px 0 rgba(0, 0, 0, 0.1)"}} src={s.media} alt={s.title} />
                        </div>
                    </div>
                ) : (
                    <div className='block md:flex items-center gap-10'>
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