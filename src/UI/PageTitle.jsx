import React from 'react'

const PageTitle = props => {
  return (
    <div className='flex items-center gap-3 mb-5'>
        <div className='w-full h-[.050em] bg-yellow-400 md:h-[.100em]'></div>
        <div className='flex items-center gap-1 text-black md:text-3xl'>
         {props.children}
        </div>
        <div className='w-full h-[.050em] bg-yellow-400 md:h-[.100em]'></div>
    </div>
  )
}

export default PageTitle