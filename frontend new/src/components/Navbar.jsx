import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../assets/images/image.png"
const Navbar = () => {
  return (
    // <div className='bg-slate-100 flex justify-between items-center w-screen rounded-lg shadow-lg'>
    <div className='flex justify-between items-center w-screen rounded-lg'>
    {/* <img src={logo} alt='uidai_english_logo.png' className='w-32 px-10 rounded-full' /> */}
    <div className='w-32 px-10 rounded-full'></div>
    <div className='flex gap-8 px-10 my-2'>
        <Link to="/login">
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>Login</li>
        </Link>
        <Link to="/signUp">
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>SignUp</li>
        </Link>
   
    </div>
    </div>
  )
}

export default Navbar