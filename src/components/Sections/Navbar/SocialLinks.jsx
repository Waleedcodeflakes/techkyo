import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const SocialLinks = () => {
  return (
    <div className='w-full bg-white'>
        <div className='w-[92%] sm:w-[90%] m-auto flex items-end justify-end gap-4 mt-3'>
            <a href="https://www.facebook.com/techkyo" target='_blank'><Facebook className='w-5 h-5 text-[#01135c]'/></a>
            <a href="https://www.instagram.com/techkyo" target='_blank'><Instagram className='w-5 h-5 text-[#01135c]'/></a>
            <a href="https://www.linkedin.com/in/techkyo" target='_blank'><Linkedin className='w-5 h-5 text-[#01135c]'/></a>
            {/* <Twitch className='w-5 h-5 text-[#01135c]    '/> */}
        </div>
    </div>
  )
}

export default SocialLinks