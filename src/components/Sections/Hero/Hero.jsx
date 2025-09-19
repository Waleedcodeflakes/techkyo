import React, {useState, useEffect} from 'react'
import heroBg from '../../../assets/images/hero-bg.webp'
import { Typed } from 'react-typed'

// import Typed from "react-typed";

const Hero = () => {

    const words = ["Deskside Services", "Datacenter Services", "Wireless Services"];

    const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className='w-full h-screen relative mt-20  bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="w-full h-full" style={{backgroundColor:'#658cbfbc'}}></div>
        <div className='flex justify-center items-center h-full w-full absolute top-0'>
            <div>
            <h1 className="poppins-bold text-[48px] sm:text-[58px] md:text-[70px] text-center text-white">
                Everything you need.
                <br />
                {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                </h1>
                <p className="poppins-meium text-[20px] text-center text-white">Techkyo has a strong global presence, delivering solutions across more than 50 countries.</p>
                </div>
        </div>
    </div>
  )
}

export default Hero