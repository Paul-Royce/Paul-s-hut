import React from 'react'
import { NavLink } from 'react-router-dom'
import {GiFullPizza} from "react-icons/gi"
import {AiFillHome} from "react-icons/ai"

const Navigation = () => {
  return (
    <nav>
        <hr />
        <ul className='flex'>
            <li>
                <NavLink to="/" className={({isActive})=> isActive ? " bg-yellow-600 text-white p-1 md:px-4 md:p-2 group flex flex-col items-center md:flex-row items gap-0-center md:gap-1 md:text-lg" : "bg-white text-black p-1 md:px-4 md:p-2 group flex flex-col gap-0 md:flex-row items-center md:gap-1 md:text-lg"}>
                    <AiFillHome className='font-bold duration-200 group-hover:text-red-700' />
                    <span className='p-0 font-bold duration-200 group-hover:text-red-700'>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/pizza" className={({isActive})=> isActive ? " bg-yellow-600 text-white p-1 md:p-2 md:px-4 group flex flex-col items-center md:flex-row items gap-0-center md:gap-1 md:text-lg": "bg-white text-black md:px-4 p-1 md:p-2 group flex flex-col gap-0 md:flex-row items-center md:gap-1 md:text-lg"}>
                    <GiFullPizza className='font-bold duration-200 group-hover:text-red-700' />
                    <span className='p-0 font-bold duration-200 group-hover:text-red-700'>Pizza</span>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation