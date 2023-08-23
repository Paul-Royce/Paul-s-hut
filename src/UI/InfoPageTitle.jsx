import React from 'react'

const InfoPageTitle = props => {
  return (                 /* REMEMBER TO INSERT DIRECTLY THE TEXT WHEN USING THIS COMPONENT, IT ALREDY PROVIDES AN H1 WHERE THE THE TEXT WILL BE SHOWN */         
          <h1 className='w-full p-1 m-auto mb-4 text-lg font-bold text-center border-2 border-yellow-500 rounded-full md:p-2'>
            {props.children}
          </h1>
  )
}

export default InfoPageTitle