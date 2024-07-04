
import React, { useState } from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const FilterOptions = () => {
    
  return (
    <div className='shadow-lg border border-gray-200 rounded-lg'>
      <div className='flex flex-col'>
        <div className='bg-blue-500 text-white text-lg font-primaryFont font-medium py-2 rounded-t-lg text-center'>
            Filters
        </div>

        <div>
        <div className="mb-4 p-4">
          <label className="block text-gray-700 font-primaryFont font-medium mb-2">Budget</label>
          <input type="range" className="w-full" min="0" max="1000" step="10" />
          <div className="flex justify-between text-gray-600 mt-2">
            <span className='mr-4 text-sm'>€0</span>
            <span className='mr-4 text-sm'>€370</span>
            <span className='mr-4 text-sm'>€1000</span>
          </div>
        </div>
        
        <hr className='border-4'/>
        
        <div>
          <div className='p-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col justify-center pr-4 space-y-3'>
                  <div className='font-primaryFont text-sm font-medium'>No of Adults</div>
                  <div className='font-primaryFont text-sm text-gray-600'>Ages 13 or above</div>
                </div>
                <div className='flex items-center space-x-1'>
                  <div>
                    <CiCircleMinus size={22} className='cursor-pointer'/>
                    </div>
                  <div>1</div>
                  <div>
                    <CiCirclePlus size={22} className='cursor-pointer'/>
                    </div>
                </div>
              </div>
              <hr className='border-t-2 '/>
          </div>
        </div>
 
        <div>
          <div className='p-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col justify-center pr-4 space-y-3'>
                  <div className='font-primaryFont text-sm font-medium'>No of Children</div>
                  <div className='font-primaryFont text-sm text-gray-600'>Ages 5-12</div>
                </div>
                <div className='flex items-center space-x-1'>
                  <div>
                    <CiCircleMinus size={22} className='cursor-pointer'/>
                    </div>
                  <div>1</div>
                  <div>
                    <CiCirclePlus size={22} className='cursor-pointer'/>
                    </div>
                </div>
              </div>
              <hr className='border-t-2 '/>
          </div>
        </div>
  

        <div>
          <div className='p-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col justify-center pr-4 space-y-3'>
                  <div className='font-primaryFont text-sm font-medium'>No of Cabins/Bedrooms</div>
                </div>
                <div className='flex items-center space-x-1'>
                  <div>
                    <CiCircleMinus size={22} className='cursor-pointer'/>
                    </div>
                  <div>1</div>
                  <div>
                    <CiCirclePlus size={22} className='cursor-pointer'/>
                    </div>
                </div>
              </div>
              <hr className='border-t-2 '/>
          </div>
        </div>

          <div>
          <div className='p-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col justify-center pr-4 space-y-3'>
                  <div className='font-primaryFont text-sm font-medium'>Do you have Pet?</div>
                </div>
                <div className=''>
                  <select name="" id="" className='px-4 py-1 border border-gray-300 bg-slate-50 rounded-lg'>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
          </div>
        </div>

        <hr className='border-4 mb-2'/> 
        <div>
          <div className='p-4 flex flex-col'>
            <div className='flex items-center justify-between'>
             <div className='font-primaryFont font-medium'>Boat Type</div>
             <div><IoIosArrowDown size={25} className='cursor-pointer'/></div>
            </div>
            <div className='mt-4'>
            <div className="mb-2">
              <input type="checkbox" id="motorboat" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="motorboat">Motorboat</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="rib" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="rib">RIB</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="houseboat" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="houseboat">Houseboat</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="gulet" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="gulet">Gulet</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="yacht" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="yacht">Yacht</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="sailboat" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="sailboat">Sailboat</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="catamran" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="catamran">Catamran</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="jekski" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="jekski">Jek SKI</label>
            </div>
            <div className="mb-2">
              <input type="checkbox" id="license" />
              <label className="ml-2 font-primaryFont text-sm font-medium" htmlFor="license">Boat without license</label>
            </div>
            </div>
             
          </div>
          <hr className='border-4 mb-2'/> 
        </div>  

                <div className="mb-4 p-4">
          <label className="block text-gray-700 font-primaryFont font-medium mb-2">Boat Size</label>
          <input type="range" className="w-full" min="0" max="1000" step="10" />
          <div className="flex justify-between text-gray-600 mt-2">
            <span className='mr-4 text-sm'>5 Mtr</span>
            <span className='mr-4 text-sm'>15 Mtr</span>
            <span className='mr-4 text-sm'>20+ Mtr</span>
          </div>
        </div> 

      </div>
    </div>
    </div>
  )
}

export default FilterOptions
