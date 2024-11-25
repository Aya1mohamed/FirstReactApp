import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="md:space-y-8 space-y-5 bg-teal-500 text-white md:p-32 p-12 md:pt-40 pt-32">
      <h1 className='font-bold md:text-5xl text-2xl  text-center pt-8'>ABOUT COMPONENT</h1>
      <div className='flex flex-row items-center space-x-5 justify-center  text-center '>
        <div className="w-24 h-1 bg-white rounded"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-24 h-1 bg-white rounded"></div>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-10'>
        <p className='p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className='p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
