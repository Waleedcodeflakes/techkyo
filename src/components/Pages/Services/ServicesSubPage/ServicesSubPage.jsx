import {services}  from "../ServicesData/ServicesData2";
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../../Sections/Footer/Footer'
import Navbar from '../../../Sections/Navbar/Navbar'
import { ArrowRight, CircleCheck, CircleCheckBig } from "lucide-react";

export default function ServicesSubPage() {
  const { id } = useParams();
//   const { id } = router.query;

  const service = services.find(s => s.id === id);
  const navigate = useNavigate();

  if (!service) return <p>Service not found</p>;

  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      <div
        className="h-screen mt-20 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
        <div className="absolute">
        <h1 className="text-[48px] poppins-semibold text-white text-center">{service.title}</h1>
        <p className="text-[18px] poppins-semibold text-[#cdd0d2] text-center">{service.hero}</p>

        </div>
      </div>

    <div className='block md:flex items-center gap-10 text-center mt-20 bg-[#eff0f5] rounded-[50px] py-20 mx-20 sm:px-4'>
        <div className='w-full md:w-[75%] m-auto'>
            <h2 className='text-[#1f276e] text-[26px] sm:text-[34px] poppins-semibold'>{service.title}</h2>
            <p  className='text-[#696969] text-[14px] sm:text-[15px] poppins-regular py-6 leading-6.5'>{service.desc}</p>
            <div className="w-full flex items-center justify-center">
                <button onClick={() => navigate(`/contact`)} className='text-base cursor-pointer text-[#fff] px-5 py-3 rounded-[50px] bg-[#1f276e] flex items-center gap-2 mt-5 poppins-medium'>Contact us <ArrowRight className='w-5 h-5 text-[#fff]' /></button>
            </div>
        </div> 
    </div>

      {/* Detailed Sections */}
      <section className="py-10 mt-20 block sm:flex items-baseline gap-8 w-[92%] sm:w-[70%] m-auto">
        <div className="w-full sm:w-[50%]">
        {service.detailed.points.map((item, index) => (
          <div key={index} className="mb-4 flex items-baselline gap-3">
          <h2 className="text-[15px] text-[#696969] poppins-bold mt-8">{item.title}</h2>
              {index === 0 ? 
              (<div></div>)
              : (
                <div className="w-fit">
                <CircleCheckBig className="text-[#1e266d] w-5 h-5" />
              </div>
              )
            }
              <div>
              {/* <h3 className="text-[15px] poppins-bold text-[#1e266d]"></h3> */}
              <p className="poppins-regular text-[15px] text-[#1e266d]"><strong>{item.heading}{index === 0 ? (''): (':')}</strong> {item.content}</p>
              </div>
          </div>
        ))}
        </div>
        <div className="w-full sm:w-[50%]">
          <ul className="list-none ">
            {service.detailed.troubleshooting.map((reason, i) => (
              <div>
          <h2 className="text-[15px] text-[#696969] poppins-bold mt-8">{reason.title}</h2>
              <div className="flex items-baselline gap-3 mb-4">
                {i === 0 ? 
              (<div></div>)
              : (
                <div className="w-fit">
                <CircleCheckBig className="text-[#1e266d] w-5 h-5" />
              </div>
              )
            }
              <li key={i} className="poppins-medium text-[15px] text-[#1e266d]">
                <strong>{reason.heading}{i === 0 ? (''): (':')}</strong> {reason.content}
              </li>
              </div>
              </div>
            ))}
          </ul>
          <h2 className="text-[15px] text-[#696969] poppins-bold mt-8 mb-4">Benefits of Choosing Us:</h2>
          <div className="list-none ">
            {service.detailed.whyChooseUs.map((reason, i) => (
              <div className="flex items-baselline gap-3 mb-4">
                <div className="w-fit">
                <CircleCheckBig className="text-[#1e266d] w-5 h-5" />
              </div>
              <div key={i} className="poppins-medium text-[15px] text-[#1e266d]">
                <strong>{reason.heading}:</strong> {reason.content}
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
