import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/image.png"
const UserNavbar = () => {
  return (
    <>
        <div className=' bg-slate-200 flex justify-center items-center w-screen rounded-lg fixed'>
        <img src={logo} alt="logo"  className='w-14 rounded-full'/>
    {/* <div className='flex justify-between w-96   px-10 rounded-full'>
        <Link to="/register">
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>Register</li>
        </Link>
        <Link to="/newevents">
            <li className='w-36 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>View New Events</li>
        </Link>
    </div>
    <div className='flex gap-8 px-10 my-2'>
        
        <Link to="/logout">
            <li className='w-20 font-semibold flex text-white justify-center items-center text-md py-1 border rounded-md cursor-pointer bg-blue-700'>Logout</li>
        </Link>
   
    </div> */}
    </div>
    
    </>
  )
}

export default UserNavbar