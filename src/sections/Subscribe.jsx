import React from 'react'
import Button from '../components/Button'
const Subscribe = () => {
  return (
    <section id="contact-us" className='flex max-container justify-between items-center max-lg:flex-col gap-10'>
      <h3 className='font-bold leading-[68px] font-palanquin text-4xl lg:max-w-md'>Sign Up for <span className='text-red-600'>Updates</span> & Newsletter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" className="input" placeholder='Subscribe@para.com' />
        <div className='flex max-sm:justify-end mt-[-7px] items-center max-sm:w-full'>
          <Button label="Subscribe" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe