import React from 'react'
import { useState } from 'react'
// import Logo from '../icons/greenlogo.svg'
import {ReactComponent as WhiteLogo} from '../icons/greenlogo.svg'
import {FiMenu} from 'react-icons/fi'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
export const Navbar = (props) => {
  const [nav, setNav] = useState(false)
  //need to use use state for hamburger menu dropdown
  const handleClick = () => {
  setNav(!nav) //sets navbar to true on click
  }
  return ( 
      <div className='flex justify-between h-20 w-full items-center absolute z-10 text-white shadow-xx'>
        <a href='/'><WhiteLogo width={85} height={85} className='ml-2 cursor-pointer' alt="Logo"/> </a>
        <ul className='hidden md:flex'>
          <li>
          <a href="/about">About</a>
          </li>
          <li>
          <a href="/projects">Projects</a>
          </li> 
          <li>
          <a href="/resume">Resume</a>
          </li>
          <li><a href="/contact" className='contact'>Contact</a></li>
        </ul>
        <div onClick={handleClick} className='md:hidden cursor-pointer'>
          <FiMenu className='arrow'/>
        </div>
        {/* Hamburger Dropdown */}
        <div onClick={handleClick} className={nav ? 'absolute top-0 right-0 w-36 mr-3 h-screen flex flex-col justify-center items-center' : 'absolute left-[-100%]'}>
          <ul className='flex flex-col items-center justify-center cursor-pointer'>
            <li className='text-2xl'>
            <a href="/about">About</a>
            </li>
            <li className='text-2xl'>
            <a href="/projects">Projects</a>
            </li>
            <li className='text-2xl'>
            <a href="/contact">Contact</a>
            </li>
            <li className='text-2xl'>
            <a href="/resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default Navbar