import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'
import list from "../../public/list.json"

export default function Courses() {
    console.log(list);
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
