import React from 'react'
import whatsapp from '../../assets/images/whatsapp.png'
const Whatsapp = () => {
  return (
    <div className='fixed z-50 bottom-[1rem] sm:bottom-[2rem] right-[1rem] sm:right-[2rem] rounded-full w-[80px] h-[80px]'>
        <a href="https://wa.me/818035850786" target='_blank'><img className='cursor-pointer rounded-full' src={whatsapp} alt="icon" /></a>
    </div>
  )
}

export default Whatsapp