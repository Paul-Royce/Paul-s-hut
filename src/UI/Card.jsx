import React from 'react'

const Card = props => {
  return (
    <div className='flex flex-col w-auto bg-white text-[12px] md:text-base rounded-sm'>
        {props.children}
    </div>
  )
}

export default Card