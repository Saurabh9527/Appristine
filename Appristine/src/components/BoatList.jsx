
import React from 'react';
import dummyData from '../utils/data.js';
import BoatCards from '../components/BoatCards.jsx'
const BoatList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {dummyData.map((data, index) => (
        <BoatCards key={index} {...data} />
      ))}
    </div>
  );
}

export default BoatList;
