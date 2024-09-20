import React from 'react'
import Home from './component/Home'
import Courses from './component/Courses'
import { Routes,Route, Navigate } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './component/context/AuthProvider'


export default function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
      <Toaster />
    </div>
  )
}
