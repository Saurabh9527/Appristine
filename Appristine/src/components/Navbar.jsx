
import React from 'react'
import logo from '../assets/images/logo.png';
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='pl-10 pr-10 pt-2'>
            <nav className='flex justify-between items-center w-full'>
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        className='cursor-pointer w-full h-full' />
                </div>
                <div className='flex items-center'>
                    <a href="#" className='m-4 text-lg font-primaryFont font-medium text-gray-600'>Bookings</a>
                    <a href="#" className='m-4 text-lg font-primaryFont font-medium text-gray-600'>Profile</a>
                    <button className=':m-4 bg-blue-500 px-4 py-3 rounded-lg text-white font-medium flex items-center space-x-2 hover:bg-blue-600'>
                        <span className='font-primaryFont'>Contact Us</span>
                        <FiPhoneCall className='text-white' />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
