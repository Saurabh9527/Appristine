// BoatCard.js
import React from 'react';
import cards from '../assets/images/Cards.png'
import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { MdOutlinePets } from "react-icons/md";


const BoatCard = ({ title, address, people, petsAllowed, boatType, price , imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg"/>
      <div className="p-2">
        <h2 className="text-lg font-primaryFont font-medium">{title}</h2>
        <div className='flex'>
        <GrLocation size={10} className='mt-1'/>
        <p className='text-xs text-gray-600'>{address}</p>
        </div>
        
        <div className="flex justify-between mt-2">
          <span className='flex items-center mr-2'>
            <span className='mr-1'>
              <GoPeople />
            </span>
            {people}
          </span>
          <span className='flex items-center text-sm'><span className='mr-1'><MdOutlinePets /></span>{petsAllowed}</span>
          <span className='flex items-center text-sm'><span className='mr-1'><img src={cards} alt="" /></span> {boatType}</span>
        </div>
        <hr className='border-[1px] mt-3 border-dashed border-gray-400'/>
        <div className='flex items-center mt-4'>
          <span className='font-primaryFont font-medium text-gray-600'>Price: </span> &nbsp;
          <p className=" text-blue-600 font-primaryFont font-medium">  {price}</p>
        </div>
        
      </div>
    </div>
  );
}

export default BoatCard;
