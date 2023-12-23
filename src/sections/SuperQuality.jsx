import React from 'react'
import st from '../assets/images/StimulasShoe1.png'
import { shoes } from '../constants'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-container gap-10 max-lg:flex-col w-full'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You<br/>
          <span className='text-red-600'> Super</span>
          <span className='text-red-600'> Quality</span> Shoes
        </h2>
        <p className='font-montserrat text-slate-gray mt-6 text-lg leading-8 mb-9 sm:max-w-sm'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div className=''>
          <Button label="View details" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="Paragon Shoe" height={522} width={570} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality