
import React from 'react';
import {FiSearch } from 'react-icons/fi';
import { MdOutlineMyLocation } from "react-icons/md";


const SearchBar = () => {
    return (
        <div 
        className="flex items-center bg-white rounded-full shadow-lg p-3 px-5 space-x-4 mt-4">
            <div 
            className="flex items-center space-x-2">
                <div 
                className="flex flex-col">
                    <label 
                    className="text-sm font-semibold text-gray-700">
                        Place of departure
                    </label>
                    <input
                        type="text"
                        placeholder="City Of Departure"
                        className="text-gray-500 focus:outline-none"
                    />
                </div>
                <div 
                className="flex items-center justify-center cursor-pointer">
                    <div 
                    className="p-2 bg-blue-100 rounded-full">
                        <MdOutlineMyLocation 
                        className="text-blue-500" 
                        />
                    </div>
                </div>
            </div>

            <div 
            className="h-8 border-l border-gray-300">
            </div>

            <div 
            className="flex flex-col">
                <label 
                className="text-sm font-semibold text-gray-700">Select date
                </label>
                <input
                    type="text"
                    placeholder="Select Dates"
                    className="text-gray-500 focus:outline-none"
                />
            </div>
         
            <div 
            className="h-8 border-l border-gray-300">
            </div>
            
            <div 
            className="flex flex-col">
                <label 
                className="text-sm font-semibold text-gray-700">Time
                </label>
                <input
                    type="text"
                    placeholder="Select Time"
                    className="text-gray-500 focus:outline-none"
                />
            </div>
  
            <button 
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
                <FiSearch size={26} />
            </button>
        </div>
    );
};

export default SearchBar;
