import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import heroBg from '../../../assets/images/hero-bg.webp'
import { Typed } from 'react-typed'

// import Typed from "react-typed";

const Hero = () => {

    const words = ["Deskside Services", "Datacenter Services", "Wireless Services"];


    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change text every 1 sec
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='w-full h-screen relative mt-16 sm:mt-14 md:mt-20  bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="w-full h-full" style={{backgroundColor:'#658cbfaa'}}></div>
        <div className='flex justify-center items-center h-full w-full absolute top-0'>
            <div className='mx-3'>
            <h1 className="poppins-semibold sm:poppins-bold text-[44px] sm:text-[58px] md:text-[70px] text-center text-white">
                Everything you need.
                <br />
                {/* {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`} */}
                 <AnimatePresence mode="wait">
                    <motion.h1
                      key={words[index]}
                      initial={{ opacity: 0, y: -20 }}   // starts above (appears from top)
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}       // exits downward
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-[44px] sm:text-[58px] md:text-[70px] poppins-bold text-white"
                    >
                      {words[index]}
                    </motion.h1>
                  </AnimatePresence>
                </h1>
                <p className="poppins-meium text-[20px] text-center text-white">Techkyo has a strong global presence, delivering solutions across more than 50 countries.</p>
                </div>
        </div>
    </div>
  )
}

export default Hero