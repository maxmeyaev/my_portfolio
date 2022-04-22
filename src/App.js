import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import { FaEnvelope } from 'react-icons/fa';
export default function App(){
    return(
        <div className="wrapper">
            <Navbar />
            <Hero />
        </div>

    )
}
