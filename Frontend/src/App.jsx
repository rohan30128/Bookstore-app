import React from 'react'
import Home from './component/Home'
import Courses from './component/Courses'
import { Routes,Route } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'


export default function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}
