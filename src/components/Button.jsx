import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor}) => {
  return (
        <button className={`flex justify-center items-center border font-montserrat text-lg leading-none px-7 py-4 mt-2
        ${
          backgroundColor
          ?`${backgroundColor} ${textColor} ${borderColor}`
        :"bg-red-600 text-white border-red-600"} rounded-full w-full"}`}
        >
          {label}
          {iconURL&&<img src={iconURL} alt="arrow right icon" className='ml-2 h-5 w-5 rounded-full' />}
        </button>
  )
}

export default Button