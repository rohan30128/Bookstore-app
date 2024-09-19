import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Freebook from './Freebook'
import Footer from "./Footer"


export default function Home() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
       <Banner/>
       <Freebook/>
       <Footer/>
    </div>
    </>
  )
}
