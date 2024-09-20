import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'

export default function Courses() {
    
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    <div>
    <Course/>
    </div>
    <Footer/>
    </div>
    </>
  )
}
