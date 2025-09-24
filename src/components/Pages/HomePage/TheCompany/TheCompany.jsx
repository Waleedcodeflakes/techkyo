import React from 'react'
import company from '../../../../assets/images/thecompany2.jpg'

const TheCompany = () => {

  const rows = 8;   // number of rows
  const cols = 8;  // number of dots per row
  return (
    <section className='w-[92%] sm:w-[80%] m-auto my-20'>
        <div className='block md:flex gap-10 w-full '>
            <div className='hidden w-[50%] sm:flex items-center relative'>
              <div className="absolute" style={{ right: "0px", top: "0px", width: "240px", height: "173px", }}>
                <div className="grid grid-rows-8 grid-cols-8 gap-4">
                  {Array.from({ length: rows * cols }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[4px] h-[4px] rounded-full bg-[#1f276e]"
                    ></div>
                  ))}
                </div>
              </div>
                <img className='relative w-[80%] z-4 rounded-[12px]' src={company} alt="image" style={{boxShadow: "0 20px 70px rgba(38, 42, 76, 0.2)"}} />
            </div>
            <div className='w-full md:w-[50%] flex flex-col gap-10 text-center sm:text-left'>
                <h2 className='poppins-semibold text-[40px] text-[#1f276e]'>THE COMPANY</h2>
                <p className='text-[#54658c] poppins-regular text-[18px]'>Techkyo has a strong global presence, delivering solutions across more than 50 countries.</p>
                <p className='text-[#696969] poppins-regular text-[15px]'>Our engineers, many of whom are multi lingual, range from level 1 through to level 3 across a broad spectrum of vendor technologies and we pride ourselves on being able to assist in almost any situation. Our global services are provisioned through the use of our own engineers and our highly approved service partners. Servicing client requirements in multiple sectors from simple smart hands engineering to the more complicated consultative approach that enables us to build solutions partnered alongside our clients. But it doesn’t end there, Techkyo can support you in so many other areas for example Datacenter, Unified collaboration, Deskside support with back fill or fixed term and contracted engineers and of course Wireless and Data communications. We can also support global roll outs and have forward stocking locations to help ease the burden of international shipping.</p>
            </div>
        </div>
    </section>
  )
}

export default TheCompany