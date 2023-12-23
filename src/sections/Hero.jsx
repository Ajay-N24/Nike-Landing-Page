import React from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons/index'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'
const Hero = () => {
  const [bigShoeImg,setbigShoeImg]=useState(bigShoe1)
  return (
    <section className='flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start pt-40 max-xl:padding-x w-full'>
        <p className='font-montserrat text-xl text-red-600'>Our Summer Collection</p>
        <h1 className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] mt-10 font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br/> 
          <div>
            <span className='text-red-600 mt-7 inline-block max-lg:mt-0'>Par </span>  <span className='xl:bg-white relative mt-1 xl:whitespace-nowrap z-10 pr-10 max-lg:mt-0'>Shoes</span>
          </div>
        </h1>
        <p className='font-montserrat text-slate-gray mt-6 text-lg leading-8 mb-9 sm:max-w-sm'>
          Flaunt your feet with the trendiest footwear of the season by shopping from Paragon.
        </p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className='flex justify-starts items-start w-full flex-wrap gap-16 mt-12'>
          {statistics.map((stat,index)=>(
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Big Shoe 1" height={502} width={610} className='object-contain relative z-10'/>
        <div className='flex gap-4 absolute sm:gap-6 -bottom-[10%] max-sm:-left-[7%] max-sm:px-6'>
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard imageURL={shoe} changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero