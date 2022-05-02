import React from 'react'
import { useState } from 'react'
import { ReactComponent as Logo } from '../icons/Rectangle.svg'
import { ReactComponent as Arrow } from '../icons/arrow.svg'

export const Navbar = (props) => {
  const [nav, setNav] = useState(false)
  //need to use use state for hamburger menu dropdown
  const handleClick = () => {
  setNav(!nav) //sets navbar to true on click
  }
  return ( 
      <div className='flex justify-between h-20 w-full items-center absolute z-10 text-white shadow-xx'>
        <Logo width={90} height={90}/>
        <ul className='hidden md:flex'>
          <li>About</li>
          <li>Projects</li> 
          <li>Contact</li>
          <li>Resume</li>
        </ul>
        <div onClick={handleClick} className='md:hidden cursor-pointer'>
          <Arrow className='arrow cursor-pointer' fill='white'/>
        </div>
        {/* Hamburger Dropdown */}
        <div onClick={handleClick} className={nav ? 'absolute top-0 right-0 w-36 mr-3 h-screen flex flex-col justify-center items-center' : 'absolute left-[-100%]'}>
          <ul className='flex flex-col items-center justify-center'>
            <li className='text-2xl'>About</li>
            <li className='text-2xl'>Projects</li>
            <li className='text-2xl'>Contact</li>
            <li className='text-2xl'>Resume</li>
          </ul>
        </div>
      </div>
  )
}
export default Navbar