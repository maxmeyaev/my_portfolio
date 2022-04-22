import React from 'react'
import { ReactComponent as Logo } from '../icons/Rectangle.svg'
export const Navbar = () => {
  return (
    <div className='flex justify-between h-20 w-full items-center absolute z-10 text-white shadow-xx'>
        <Logo width={90} height={90}/>
        <ul className='text-right hidden md:flex'>
            <li className=''>About</li>
            <li className=''>Projects</li> 
            <li className=''>Contact</li>
            <li className=''>Resume</li>
        </ul>
    </div>
  )
}
export default Navbar