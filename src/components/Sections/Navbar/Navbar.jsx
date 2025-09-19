import React, {useState} from 'react'
import logo from '../../../assets/images/logoDark.png'
import { AnimatePresence, motion } from 'framer-motion';

import { NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [menuBar, setMenuBar] = useState(false)

    // const services = ["Services 1", "Services 2", "Servcies 3"];
  return (
    <div className='fixed w-full top-0 z-50 bg-white shadow-md'>
    <section className='w-[90%] m-auto bg-white'>
        <div className='flex justify-between items-center py-4'>
            <div className='w-[45%] sm:w-[25%] md:w-[15%]'>
                <img src={logo} alt="icon" />
            </div>
            <nav>
                <ul className='hidden md:flex items-center gap-4 poppins-medium'>
                    <li><NavLink  to="/" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Home</NavLink></li>
                    <li className="relative group">
                        <NavLink to="/company" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Company</NavLink>
                    </li>
                    <li 
                    className="relative"
                    onMouseEnter={() => setOpenMenu("services")}
                    onMouseLeave={() => setOpenMenu(null)}
                    ><NavLink to="/services" className={({ isActive }) =>`flex items-center gap-2 text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Services <ChevronDown className='w-5 h-5 hover:text-[#031359] text-[#1f276e]' /> </NavLink>
                    
                    {/* Popup */}
                    {/* {openMenu === "services" && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                        <ul className="py-2">
                            {services.map((s) => (
                            <li key={s}>
                            <NavLink
                            to="/service"
                                className="hover:bg-[#f0f0f0] hover:border-l-[2px] poppins-medium hover:border-black block px-4 py-2 text-sm text-[#1f276e] hover:text-[#031359]"
                            >
                            {s}
                            </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )} */}
                    
                    </li>
                    <li><NavLink to="/sectors" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Sectors</NavLink></li>
                    <li><NavLink to="/careers" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Careers</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Contact</NavLink></li>
                    <li><NavLink to="/contact" className="bg-[#1f276e] px-5 py-3 rounded-[50px] text-white" >Become a Partner</NavLink></li>
                </ul>
                <div className='block md:hidden'>
                    <Menu onClick={() => setMenuBar(true)} className='w-8 h-8 text-black' />
                </div>
                {menuBar && (
                    <div>
                     <ul className='flex flex-col z-10 gap-10 pl-4  md:hidden items-cente bg-white absolute top-0 left-0 h-screen w-[90%] sm:w-[50%] poppins-medium'>
                        <div className='flex items-center justify-between py-3'>
                            <div className='w-[60%] sm:w-[45%]'>
                                <img src={logo} alt="icon" />
                            </div>
                            <X onClick={() => setMenuBar(false)} className='w-12 h-12 text-black pr-4' />
                        </div>
                    <li><NavLink  to="/" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Home</NavLink></li>
                    <li className="relative group">
                        <NavLink to="/company" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Company</NavLink>
                    </li>
                    <li 
                    className="relative"
                    onMouseEnter={() => setOpenMenu("services")}
                    onMouseLeave={() => setOpenMenu(null)}
                    ><NavLink to="/services" className={({ isActive }) =>`flex items-center gap-2 text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Services <ChevronDown className='w-5 h-5 hover:text-[#031359] text-[#1f276e]' /> </NavLink>
                    
                    {/* Popup */}
                    {/* {openMenu === "services" && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                        <ul className="py-2">
                            {services.map((s) => (
                            <li key={s}>
                            <NavLink
                            to="/service"
                                className="hover:bg-[#f0f0f0] hover:border-l-[2px] poppins-medium hover:border-black block px-4 py-2 text-sm text-[#1f276e] hover:text-[#031359]"
                            >
                            {s}
                            </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                    )} */}
                    
                    </li>
                    <li><NavLink to="/sectors" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Sectors</NavLink></li>
                    <li><NavLink to="/careers" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Careers</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) =>` text-base py-3 px-2 hover:text-[#031359] ${isActive ? 'text-[#1f276e]' : 'hover:text-[#031359] text-[#1f276e]'}`}>Contact</NavLink></li>
                    <li><NavLink to="/contact" className="bg-[#1f276e] px-5 py-3 rounded-[50px] text-white" >Become a Partner</NavLink></li>
                </ul>
                    <div className='bg-grey-600 absolute w-full h-full top-0 z-1'></div>
                </div>
                )}

                <AnimatePresence>
                {menuBar && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 backdrop-blur-[2px] bg-transparent z-4 md:hidden"
                    onClick={() => setMenuBar(false)}
                    />
                )}
            </AnimatePresence>
            </nav>
        </div>
    </section>
    </div>
  )
}

export default Navbar