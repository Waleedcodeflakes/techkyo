import React from 'react'
import { ChevronDown } from 'lucide-react'
import tablet from '../../../../assets/images/tablet.jpg'

const QuestionForm = () => {
  return (
    <secion className="w-full relative">
        <div className='w-full absolute top-[-8rem] left-0 z-[-1] h-[350px] bg-gradient-to-r from-[#f0faff] to-[#c3e0f7]'></div>
        <div className='flex pb-20 mt-20 bg-white gap-10 w-[80%] m-auto shadow-[0px_20px_70px_0px_rgba(38, 42, 76, 0.2)] rounded-[10px]' style={{boxShadow: "0 20px 70px rgba(38, 42, 76, 0.2)"}}>
            <div className='w-[50%] py-12 px-17'>
                <h3 className='text-[#323b7a] text-[22px] poppins-semibold'>Have some questions or want to say hi?</h3>
                <p className='text-[#455882] text-lg poppins-regular text-center'>Your queries are important to us, reach us anytime for further information.</p>
                <div className='text-[15px] poppins-medium mt-8 flex flex-col gap-3'>
                    <input type="text" className='rounded-[50px] border border-[#e8e8e8] placeholder:text-[#1e269c] outline-none py-4 px-6 w-full ' placeholder='Enter your name' />
                    <input type="text" className='rounded-[50px] border border-[#e8e8e8] placeholder:text-[#1e269c] outline-none py-4 px-6 w-full ' placeholder='Phone' />
                    <input type="text" className='rounded-[50px] border border-[#e8e8e8] placeholder:text-[#1e269c] outline-none py-4 px-6 w-full ' placeholder='Enter your email' />
                    <div className='flex justify-between items-center rounded-[50px] border border-[#e8e8e8] py-4 px-3 w-full'>
                    <select className=' text-[#1e269c] w-full appearance-none  outline-none ' name="describe" id="">
                        <option value="">Which best describes you?</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Customer">Customer</option>
                        <option value="Business Owner">Business Owner</option>
                    </select>
                    <ChevronDown className='w-6 h-6 text-[#1e269c]' />
                    </div>
                    <textarea name="message" rows="5" className='rounded-[40px] border border-[#e8e8e8] text-[#1e269c] outline-none py-4 px-6 w-full' placeholder='Your message' id=""></textarea>
                    <input type="submit" value="Submit" className='rounded-[50px] cursor-pointer bg-[#1f276e] text-[#fff] outline-none py-4 px-9 w-fit' placeholder='Enter your email' />
                </div>
            </div>
            <div className='w-[50%] '>
                <div  style={{
                    backgroundImage: `url(${tablet})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-full rounded-[0_10px_0_0]"
                ></div>
            </div>
        </div>
    </secion>
  )
}

export default QuestionForm