import React from 'react'
import engagementmodel from '../../assets/engagement-models.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import './engagementmodel.css'

function Engagementmodel() {
  return (
    <>
      <div className="grid grid-cols-2 mt-20 container bg-gradient-to-r from-[#03228F] to-[#0e5cd9] px-10 py-20 space-x-20">
        <div className="text mt-36">
          <h1 className='text-white font-[500] text-[48px] mb-2'>Engagement Models</h1>
          <p className='font-[400] text-white text-[17px] leading-7'>11+ Years' worth of experience in providing Top Web & Mobile App Design & Development Solutions to the world, we ensure that your needs are met in a timely and qualitative manner. Ahex offers efficacious engagement models personalized for your business requirements. The constantly changing marketplace is increasing business complexities.</p>
          <button className=' mt-7 bg-[#0E73E4] text-white font-[500] hover:bg-white hover:text-[#0E73E4] text-[17px] py-2 px-4 rounded-xl'>Get Started <FontAwesomeIcon icon={faArrowCircleRight} className='ms-1 btn-hvr' style={{fontSize: "20px" }} /></button>
        </div>
        <div className="img mt-16">
          <img src={engagementmodel} alt="" className='h-[28rem]' />
        </div>
      </div>
    </>
  )
}

export default Engagementmodel
