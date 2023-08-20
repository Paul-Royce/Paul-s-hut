import React from 'react'

const CardsGrid = props => {
  return (
    <div className='grid grid-cols-2 gap-1 lg:gap-y-5 lg:gap-x-3 md:grid-cols-3 lg:grid-cols-4'>
      {props.children}  
    </div>
  )
}

export default CardsGrid