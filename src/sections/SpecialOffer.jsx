import React from 'react'
import Button from '../components/Button'
import offer from '../assets/images/offer.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
const SpecialOffer = () => {
  return (
    <section className='flex flex-row justify-wrap items-center max-[1220px]:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="Shoe Offer" height={687} width={773} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col justify-center max-[1220px]:mt-10'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-red-600'> Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer