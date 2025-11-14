import React, {useState} from 'react'
import logo from '../../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {

    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (category) => {
        setActiveCategory((prev) => (prev === category ? null : category));
    };

    const serviceCategories = {
        "IT Infrastructure": [
            "Professional Service",
            'Security Operations',
            "Helpdesk Solutions",
            "Datacenter Services",
            "Wireless Survey",
            "Network Support",
            "Structured Cabling",
            "Virtualization Services",
            "IT Asset Disposal",
            "Global Deployments"
        ],
        "Software & Development": [
            "Custom Software Development",
            "Web & App Development",
            "SQA & Testing",
            "Security Operations",
            "Cybersecurity Solutions"
        ],
        "Business & Staffing": [
            "Project Management And Consulting",
            "Outsourcing & Remote Staffing",
            "Staffing & Recruitment Solutions",
            "Staff Augmentation",
            "Retail Support"
        ],
        "Support & Training": [
            "End User Computing Support",
            "IT Training",
            "Secured Warehousing",
            "IT Hardware Procurement",
            "AV Technology"
        ]
        };

      const sectorCategories = {
        "Commercial & Consumer": [
            "Retail",
            "Hospitality",
            "Construction & Real Estate",
            "Manufacturing"
        ],
        "Corporate & Enterprise": [
            "Enterprise",
            "Datacenter Services",
            "Carrier Network",
            "Telecommunications",
            "Logistics & Transportation"
        ],
        "Public Sector & Institutions": [
            "Government",
            "Education",
            "Healthcare",
            "Non-Profit Organizations"
        ],
        "Finance & Regulated Industries": [
            "Banking & Financial Services",
            "Pharmaceuticals & Life Sciences",
        ]
        };


  return (
    <section className='w-full bg-[#004687]'>
    <footer className='w-[92%] m-auto mt-16 py-18'>
        <img className='w-[55%] sm:w-[15%] my-10' src={logo} alt="" />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-between items-start'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>UK Office</h3>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Address:</strong> 450 Bath Road, Longford,<br/> Heathrow London, UB7 0EB, UK</p>
                {/* <p className='text-[#bdbec7] text-base poppins-medium'><strong>Phone:</strong> +81 80-3585-0786</p> */}
                <a href='mailto:info@techkyo.com' className='text-[#bdbec7] text-base poppins-medium'><strong>Email:</strong> info@techkyo.com</a>
                <div className=' flex items-end justify-start gap-4 mt-3'>
                    <a href="https://www.facebook.com/techkyo" target='_blank'><Facebook className='w-5 h-5 text-[#bdbec7]  hover:text-white  '/></a>
                    <a href="https://www.instagram.com/techkyo" target='_blank'><Instagram className='w-5 h-5 text-[#bdbec7] hover:text-white   '/></a>
                    <a href="https://www.linkedin.com/in/techkyo" target='_blank'><Linkedin className='w-5 h-5 text-[#bdbec7]  hover:text-white  '/></a>
                    <a href="https://www.linkedin.com/in/techkyo" target='_blank'><Youtube className='w-5 h-5 text-[#bdbec7]  hover:text-white  '/></a>
                    {/* <a href="https://www.linkedin.com/in/techkyo" target='_blank'><TicketIcon className='w-5 h-5 text-[#bdbec7]  hover:text-white  '/></a> */}
                    {/* <Twitch className='w-5 h-5 text-[#01135c]    '/> */}
                </div>
            </div>
            <div className='flex flex-col gap-3 mt-12 sm:mt-0'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Useful Links</h3>
                <ul className='text-[#bdbec7] text-base poppins-medium flex flex-col gap-7'>
                    <li><Link className='hover:text-white' to="/">Home</Link></li>
                    <li><Link className='hover:text-white' to="/services">Services</Link></li>
                    <li><Link className='hover:text-white' to="/core-services">Core Services</Link></li>
                    <li><Link className='hover:text-white' to="/sectors">Sectors</Link></li>
                    <li><Link className='hover:text-white' to="/contact">Contact</Link></li>
                    <li><Link className='hover:text-white' to="/partners">Partners</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 mt-12 sm:mt-0'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Services</h3>
                <ul className="py-0">
                    {Object.entries(serviceCategories).map(([category, subServices]) => (
                        <li key={category} className="relative group">
                        {/* Category */}
                        <span onClick={() => toggleCategory(category)} className="block py-2 transition-all duration-200 text-[#bdbec7] text-base poppins-medium hover:text-white cursor-pointer">
                            <span className='pr-2'>{activeCategory === category ? "-" : '+'}</span>{category}
                        </span>
                        {/* Subcategory Dropdown */}
                        {activeCategory === category && (
                        <motion.div 
                        initial={{ x: 30, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -30, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="block min-w-[200px]">
                            <ul className="py-2">
                            {subServices.map((s) => (
                                <li key={s}>
                                <NavLink
                                    to="/services"
                                    state={{ scrollTo: s }}   // pass service name
                                    className=" poppins-medium poppins-medium hover:border-black block px-4 py-2 text-sm text-[#fff] hover:text-[#fff]"
                                    >
                                    {s}
                                </NavLink>
                                </li>
                            ))}
                            </ul>
                        </motion.div>

                        )}
                        </li>
                    ))}
                    </ul>
            </div>
            <div className='flex flex-col gap-3 mt-12 sm:mt-0'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Sectors</h3>
                <ul className="py-0">
                    {Object.entries(sectorCategories).map(([category, subServices]) => (
                        <li key={category} className="relative group">
                        {/* Category */}
                        <span onClick={() => toggleCategory(category)} className="block py-2 transition-all duration-200 text-[#bdbec7] text-base poppins-medium hover:text-white cursor-pointer">
                            <span className='pr-2'>{activeCategory === category ? "-" : '+'}</span>{category}
                        </span>
                        {/* Subcategory Dropdown */}
                        {activeCategory === category && (
                        <motion.div
                        initial={{ x: 30, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -30, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="block min-w-[200px]">
                            <ul className="py-2">
                            {subServices.map((s) => (
                                <li key={s}>
                                <NavLink
                                    to="/sectors"
                                    state={{ scrollTo: s }}   // pass service name
                                    className=" poppins-medium poppins-medium hover:border-black block px-4 py-2 text-sm text-[#fff] hover:text-[#fff]"
                                    >
                                    {s}
                                </NavLink>
                                </li>
                            ))}
                            </ul>
                        </motion.div>

                        )}
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    </footer>
        <div className='w-full bg-[#003278] text-center py-5'>
        <p className='poppins-regular text-[#bdbec7] text-[15px] px-3'>© {new Date().getFullYear()} Techkyo | Delivering with scale and agility. All Rights Reserved.</p>
    </div>
    </section>
  )
}

export default Footer