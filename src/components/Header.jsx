import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserCircle} from "react-icons/fa"
import {AiOutlinePercentage} from "react-icons/ai"
import {FaHatCowboy} from "react-icons/fa"

const Header = () => {
  return (   
    <div className='flex items-center justify-between p-2'>   {/* Eache DIV is flexed  */}
      <Link to="/" className='flex items-center gap-1 text-xl'>
        <div className='p-2 bg-black rounded-full'>
        <FaHatCowboy className='text-yellow-500 '/>
        </div>
          Paul's Hut
      </Link>

      <div className='flex '>
        <FaUserCircle className='text-3xl text-yellow-500 rounded-full' />
      </div>
    </div>
  )
}

export default Header