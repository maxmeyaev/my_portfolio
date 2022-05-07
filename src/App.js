import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from './pages/about'
import Contact from './pages/contact';
import Resume from './pages/resume'
import Projects from './pages/projects'
export default function App(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
        </>

    )
}
