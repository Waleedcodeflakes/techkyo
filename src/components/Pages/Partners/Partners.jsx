import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import HeroCommon from '../../Sections/HeroCommon/HeroCommon'
import Footer from '../../Sections/Footer/Footer'
import clients1 from '../../../assets/images/partners/partners (1).jpg'
import clients30 from '../../../assets/images/partners/partners (1).png'
import clients2 from '../../../assets/images/partners/partners (2).png'
import clients3 from '../../../assets/images/partners/partners (3).png'
import clients4 from '../../../assets/images/partners/partners (4).png'
import clients5 from '../../../assets/images/partners/partners (5).png'
import clients6 from '../../../assets/images/partners/partners (6).png'
import clients7 from '../../../assets/images/partners/partners (7).png'
import clients8 from '../../../assets/images/partners/minitab.svg'
import clients9 from '../../../assets/images/partners/partners (9).png'
import clients10 from '../../../assets/images/partners/partners (10).png'
import clients11 from '../../../assets/images/partners/partners (11).png'
import clients12 from '../../../assets/images/partners/partners (12).png'
import clients13 from '../../../assets/images/partners/partners (13).png'
import clients14 from '../../../assets/images/partners/partners (14).png'
import clients15 from '../../../assets/images/partners/partners (15).png'
import clients16 from '../../../assets/images/partners/partners (16).png'
import clients17 from '../../../assets/images/partners/partners (17).png'
import clients18 from '../../../assets/images/partners/partners (18).png'
import clients19 from '../../../assets/images/partners/partners (19).png'
import clients20 from '../../../assets/images/partners/partners (20).png'
import clients21 from '../../../assets/images/partners/partners (21).png'
import clients22 from '../../../assets/images/partners/partners (22).png'
import clients23 from '../../../assets/images/partners/partners (23).png'
import clients24 from '../../../assets/images/partners/partners (24).png'
import clients25 from '../../../assets/images/partners/partners (25).png'
import clients26 from '../../../assets/images/partners/partners (26).png'
import clients28 from '../../../assets/images/partners/partners (28).png'
import clients29 from '../../../assets/images/partners/partners (29).png'

const Partners = () => {

    const clients = [
  { logo: clients1, name: "Client 1", url: "https://www.dell.com" },
  { logo: clients2, name: "Client 2", url: "https://www.vmware.com" },
  { logo: clients3, name: "Client 3", url: "https://www.pciocs.com" },
  { logo: clients4, name: "Client 4", url: "https://www.minitab.com" },
  { logo: clients5, name: "Client 5", url: "https://www.adobe.com" },
  { logo: clients6, name: "Client 6", url: "https://www.apc.com" },
  { logo: clients7, name: "Client 7", url: "https://www.apple.com" },
  { logo: clients8, name: "Client 8",bg: '#000', url: "https://www.minitab.com" },
  { logo: clients9, name: "Client 9", url: "https://www.cisco.com" },
  { logo: clients10, name: "Client 10", url: "https://www.cloud.google.com" },
//   { logo: clients11, name: "Client 11", url: "https://www.client11.com" },
  { logo: clients12, name: "Client 12", url: "https://www.eaton.com" },
  { logo: clients13, name: "Client 13", url: "https://www.fortinet.com" },
//   { logo: clients14, name: "Client 14", url: "https://www.client14.com" },
  { logo: clients15, name: "Client 15", url: "https://www.hp.com" },
//   { logo: clients16, name: "Client 16", url: "https://www.ibm.com" },
  { logo: clients17, name: "Client 17", url: "https://www.trendmicro.com" },
  { logo: clients18, name: "Client 18", url: "https://www.yealink.com" },
  { logo: clients19, name: "Client 19", url: "https://www.toshiba.com" },
  { logo: clients20, name: "Client 20", url: "https://www.juniper.com" },
  { logo: clients21, name: "Client 21", url: "https://www.lansweeper.com" },
  { logo: clients22, name: "Client 22", url: "https://www.lenovo.com" },
  { logo: clients24, name: "Client 24", url: "https://www.lexmark.com" },
  { logo: clients25, name: "Client 25", url: "https://www.netgear.com" },
  { logo: clients26, name: "Client 26", url: "https://www.netapp.com" },
  { logo: clients28, name: "Client 28", url: "https://www.microsoft.com/surface" },
  { logo: clients29, name: "Client 29", url: "https://www.techkyo.com" },
//   { logo: clients30, name: "Client 30", url: "https://www.client30.com" },
];


  return (
    <div>
        <Navbar/>
        <HeroCommon title="Partners" url="Partners" />
        <section className='py-20 w-[92%] md:w-[80%] m-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 justify-between items-center gap-2'>
            {clients.map((c, idx) => (
            <a
                key={idx}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 justify-center w-[160px] sm:w-[140px] md:w-[120px]" style={{background: `${c.bg}`}}
            >
                <img
                src={c.logo}
                alt={c.name}
                className="w-full h-auto object-contain"
                />
            </a>
            ))}
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Partners