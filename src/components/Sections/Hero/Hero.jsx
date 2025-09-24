import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import heroBg from '../../../assets/images/hero-bg.webp'
import { Typed } from 'react-typed'

// import Typed from "react-typed";

const Hero = () => {

    const words = ["Deskside Services", "Datacenter Services", "Wireless Services","Custom Software Development","End User Computing Support","IT Training","Project Management And Consulting","Outsourcing & Remote Staffing","Staffing & Recruitment Solutions","Virtualization Services","Secured Warehousing","SQA & Testing","IT Hardware Procurement","Web & App Development","Security Operations","Network Support","Structured Cabling","IT Asset Disposal","Staff Augmentation","Retail Support","Global Deployments","AV Technology","Cybersecurity Solutions"];


    const [index, setIndex] = useState(0);

 useEffect(() => {
  let timeout;
  const showNext = () => {
    // wait 3s before starting exit → next word
    timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
      showNext();
    }, 3000); // 3000ms stay + 600ms exit
  };

  showNext();
  return () => clearTimeout(timeout);
}, []);

  const wavesData = [
    { duration: 15, initialX: '-10%', finalX: '110%', opacity: 1, height: '300px', zIndex: 5 },
    { duration: 12, initialX: '-50%', finalX: '150%', opacity: 0.8, height: '30px', zIndex: 4 },
    { duration: 18, initialX: '0%', finalX: '120%', opacity: 0.6, height: '300px', zIndex: 3 },
    { duration: 14, initialX: '20%', finalX: '130%', opacity: 0.4, height: '300px', zIndex: 2 },
    { duration: 16, initialX: '50%', finalX: '140%', opacity: 0.2, height: '300px', zIndex: 1 },
    { duration: 20, initialX: '10%', finalX: '115%', opacity: 0.1, height: '300px', zIndex: 0 },
  ];


  return (
    <div className='relative'>
    <div className='w-full h-screen mt-16 overflow-x-hidden overflow-y-hidden sm:mt-14 md:mt-20  bg-cover bg-center relative' style={{ backgroundImage: `url(${heroBg})` }}>
        {/* <div className="w-full h-full" style={{backgroundColor:'#658cbfaa'}}></div> */}
        <div className="w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
        <div className='flex justify-center items-center h-full w-full absolute top-0'>
            <div className='mx-3'>
            <h1 className="poppins-semibold sm:poppins-bold text-[44px] sm:text-[58px] md:text-[70px] text-center text-white">
                Everything you need.
                <br />
                {/* {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`} */}
                 <AnimatePresence mode="wait">
                    <motion.h1
                     key={words[index]}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
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
        <div
      style={{
        position: 'relative z-50',
        width: '100%',
        height: '0px',
        overflow: 'hidden',
      }}
    >
      {wavesData.map((wave, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            bottom: '0',
            width: '150%',
            height: wave.height,
            opacity: wave.opacity,
            backgroundColor: 'transparent', // Changed to white color
            zIndex: wave.zIndex,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="white" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,101.3C672,128,768,192,864,192C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100% 100%',
          }}
          initial={{ x: wave.initialX }}
          animate={{ x: wave.finalX }}
          transition={{
            duration: wave.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Hero