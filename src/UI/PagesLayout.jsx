import React from 'react'

const PagesLayout = props => {
  return (
    <div className='w-11/12 p-3 m-auto md:w-9/12'>
        {props.children}
    </div>
  )
}

export default PagesLayout