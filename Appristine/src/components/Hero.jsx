
import React from 'react'
import background from '../assets/images/heroBackground.png';
import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <div className='relative'>
            <div>
                <img
                    src={background}
                    alt="Hero-section-background"
                    className='w-full h-full brightness-50' />
            </div>

            <div
                className='flex flex-col absolute inset-0 justify-center items-center'>
                <h1 
                className='font-primaryFont font-semibold text-5xl text-white '>
                    To Rent a Boat Never Easy Before
                </h1>
                <h4 
                className='font-primaryFont text-xl text-gray-100 mt-5'>
                    Select your preference as per your convenience
                </h4>
                <SearchBar />
            </div>
        </div>
    )
}

export default Hero
