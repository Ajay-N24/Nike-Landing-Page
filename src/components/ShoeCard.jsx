import React from 'react'

const shoeCard = ({imageURL,bigShoeImg,changeBigShoeImage}) => {
    const handleclk=()=>{
        if(bigShoeImg!==imageURL.bigShoe){
            changeBigShoeImage(imageURL.bigShoe)
        }
    }
    return (
    <div className={`
    border-2  
    ${bigShoeImg===imageURL.bigShoe?'border-red-600':'border-transparent'} cursor-pointer max-sm:flex-1 rounded-xl
    `} onClick={handleclk}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl'>
            <img src={imageURL.thumbnail} alt="Shoe Collection" width={127} height={103} className='object-contain'/>
        </div>
    </div>
  )
}

export default shoeCard