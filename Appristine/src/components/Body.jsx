
import React from 'react'
import FilterOptions from './FilterOptions'
import BoatList from './BoatList'

const Body = () => {
  return (
    <div className='flex mt-5 pl-10 pr-10 space-x-3'>
      <section className='w-3/12 mb-6'>
        <FilterOptions/>
      </section>
      <section className='w-full'>
        <BoatList/>
      </section>
    </div>
  )
}

export default Body
