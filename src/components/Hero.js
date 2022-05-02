import React from 'react'
import Email from '../icons/icon1.svg'
import GithubLogo from '../icons/icon2.svg'
export default function Hero() {
    return (
            <div className='w-full h-screen relative'>
                <img src='/images/bg2.png' alt="bg-img" className='w-full h-screen object-cover' />
                <div className='flex absolute w-full h-full top-0 flex-col justify-center items-center'>
                    <h2 className='text-2xl md:text-3xl'>Hi, I'm</h2>
                    <h1 className='text-3xl md:text-5xl'>Max Meyaev</h1>
                    <div className='flex bottom-0 absolute'>
                        <a 
                            href="" className='icons'>
                            <img src={Email} alt="Email"/>
                        </a>
                        <a 
                            href="https://github.com/maxmeyaev" target="_blank" 
                            className='icons'>
                            <img src={GithubLogo} alt="Github"/>
                        </a>
                    </div>
                </div>
            </div>
    )
}