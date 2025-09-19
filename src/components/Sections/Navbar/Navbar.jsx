import React, {useState} from 'react'
import logo from '../../../assets/images/logoDark.png'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    // const services = ["Services 1", "Services 2", "Servcies 3"];
  return (
    <div className='fixed w-full top-0 z-50 bg-white shadow-md'>
    <section className='w-[90%] m-auto bg-white'>
        <div className='flex justify-between items-center py-4'>
            <div className='w-[15%]'>
                <img src={logo} alt="icon" />
            </div>
            <nav>
                <ul className='flex items-center gap-4 poppins-medium'>
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
            </nav>
        </div>
    </section>
    </div>
  )
}

export default Navbar