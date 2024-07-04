
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='mt-6 bg-blue-100'>
      <div className='flex flex-col pl-[20%] pr-[20%] pt-[3%]'>
        <div className='flex justify-between p-2'>
         <div className='flex flex-col '>  {/*1st  */}
           <div>
            <h2 className="text-3xl font-bold font-primaryFont text-blue-500">Yachtify</h2>
            </div>
           <div className='mt-4'>
            <p className='font-primaryFont text-gray-600'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,<br /> sed do eiusmod tempor.</p>
            </div>
           <div className='flex items-center mt-4'>
            <div className='mx-2'>
                <FaFacebook size={24} className='text-blue-500 cursor-pointer'/>
            </div>
            <div className='mx-2'>
                <AiFillTwitterCircle size={24} className='text-blue-500 cursor-pointer'/>
            </div>
            <div className='mx-2'>
                <FaYoutube size={24} className='text-blue-500 cursor-pointer' />
            </div>
            <div className='mx-2'>
                <AiFillInstagram size={24} className='text-blue-500 cursor-pointer'/>
            </div>
           </div>
         </div>
            
         <div className="">
          <h3 className="font-primaryFont font-semibold ">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li> <a href="#" className='font-primaryFont text-gray-600'>Home</a></li>
            <li> <a href="#" className='font-primaryFont text-gray-600'>Register as boat owner</a></li>
            <li> <a href="#" className='font-primaryFont text-gray-600'>Register as Broker</a></li>
            <li> <a href="#" className='font-primaryFont text-gray-600'>Contact us</a></li>
            <li> <a href="#" className='font-primaryFont text-gray-600'>FAQ’S</a></li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-primaryFont font-semibold ">Get In Touch</h3>
          <ul className="mt-4 space-y-2">
            <li className='flex items-center space-x-3'>
                <span>
                    <PiPhoneCallFill size={24} className='text-blue-500 '/>
                </span> 
                <span className='font-primaryFont text-gray-600'>+1 12345 67890</span>
            </li>
            <li className='flex  items-center space-x-3'>
                <span>
                    <MdEmail size={24} className='text-blue-500'/>
                </span> 
                <span className='font-primaryFont text-gray-600'>example@gmail.com</span>
            </li>
            <li className='flex space-x-3'>
                <span>
                    <PiMapPinFill size={24} className='text-blue-500'/>
                </span> 
                <span className='font-primaryFont text-gray-600'>1014 N Main St,Miami, <br /> Oklahoma, 74354, United <br /> States</span>
            </li>
          </ul>
        </div>  
        </div>
      </div>

      <div className='bg-blue-400 py-4'>
            <p className='text-center font-primaryFont text-sm font-medium text-white'>&copy; 2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
