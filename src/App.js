import React from 'react'
import Navbar from './components/Navbar'
// import bgimg from '/images/bg-img.png'
export default function App(){
    return(
        <div className="wrapper">
            <div className="absolute p-18 bg-transparent">
                <Navbar />
            </div>
            <img src='/images/bg-img.png' alt="bg-img" className='w-full h-screen bg-center bg-cover bg-no-repeat relative' />
                <div className="absolute m-20 w-auto">
                </div>
        </div>

    )
}
