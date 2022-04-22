import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
export default function Hero() {
  return (
        <div className='w-full h-screen relative'>
            <img src='/images/bg-img.png' alt="bg-img" className='w-full h-screen object-cover' />
            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center'>
                <h2>Hi, I'm</h2>
                <h1>Max Meyaev</h1>
            </div>
            <ul className='flex absolute align-bottom items-center bg-white shadow-sm'>
                <FaEnvelope className='flex items-center align-bottom'/>
            </ul>
        </div>
  )
}