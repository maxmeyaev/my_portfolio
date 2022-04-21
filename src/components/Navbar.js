import React from 'react'
import { ReactComponent as Logo } from '../icons/Rectangle.svg'
export const Navbar = () => {
  return (
    <div className='flex justify-between h-20 w-full items-center absolute z-10 text-white shadow-xx'>
        <div className=''>
          <Logo width={90} height={90}/>
        </div>
        <ul className='flex text-right'>
            <li className=''>About</li>
            <li className=''>Projects</li> 
            <li className=''>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar