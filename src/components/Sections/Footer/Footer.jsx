import React from 'react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='w-full'>
    <footer className='w-full mt-16 bg-[#004687] px-12 py-18'>
        <img className='w-[15%] my-10' src={logo} alt="" />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-start'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Japan Office</h3>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Address:</strong> 450 Bath Road, Longford,<br/> Heathrow London, UB7 0EB, UK</p>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Phone:</strong> +81 80-3585-0786</p>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Email:</strong> info@techkyo.com</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Pakistan Office</h3>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Address:</strong> Jadoon Plaza Phase 2,<br/>Abbottabad Pakistan</p>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Phone:</strong> +81 80-3585-0786</p>
                <p className='text-[#bdbec7] text-base poppins-medium'><strong>Email:</strong> info@techkyo.com</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Useful Links</h3>
                <ul className='text-[#bdbec7] text-base poppins-medium flex flex-col gap-7'>
                    <li><Link className='hover:text-white' to="/">Home</Link></li>
                    <li><Link className='hover:text-white' to="/services">Services</Link></li>
                    <li><Link className='hover:text-white' to="/sectors">Sectors</Link></li>
                    <li><Link className='hover:text-white' to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-white poppins-semibold text-base md:text-lg mb-3'>Resources</h3>
                <ul className='text-[#bdbec7] text-base poppins-medium flex flex-col gap-7'>
                    <li><Link className='hover:text-white' to="/">Blog</Link></li>
                    <li><Link className='hover:text-white' to="/">Terms and Conditions</Link></li>
                    <li><Link className='hover:text-white' to="/">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
    </footer>
        <div className='w-full bg-[#003278] text-center py-5'>
        <p className='poppins-regular text-[#bdbec7] text-[15px]'>© 2025 Techkyo | Delivering with scale and agility. All Rights Reserved.</p>
    </div>
    </section>
  )
}

export default Footer