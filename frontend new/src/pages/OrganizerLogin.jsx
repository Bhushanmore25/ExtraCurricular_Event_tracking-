import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const OrganizerLogin = () => {
  const [form, setform] = useState({ email: "", password: "",role:"" });
    const navigate = useNavigate();
  const verifypassword = async () => {
    
    const newPassword = { ...form,role:"organizer"};

    try {
        await fetch("http://localhost:3000/organizerlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPassword)
        });

        if (!response.ok) {
            throw new Error('Invalid password');
        }
        setform({name: "", password: "" });
        navigate('/organizer');
      } catch (error) {
      navigate('/organizer/signup');
        console.error('Error saving password:', error.message);
    }

};
const handleChange = (e) => {
  setform({ ...form, [e.target.name]: e.target.value });
}
  return (
    <>
        <div className="h-screen bg-cover bg-center flex justify-center items-center">
        <div className='flex justify-center w-[30vw] items-center bg-slate-200 h-[70vh] rounded-lg flex-col'>
            <h1 className='mt-11 mb-0 text-4xl font-sans font-semibold text-blue-700'>Login as </h1>
            <h1 className='mt-3 mb-0 text-4xl font-sans font-bold text-blue-900'>Oraganizer </h1>

          <div className=' flex justify-center items-center h-[70vh] flex-col gap-5 w-[50vw]'>
              <input type="text" placeholder='Enter Email' className='border border-blue-700 px-2 w-80 rounded-md py-1' name="email"  
  value={form.email}
  onChange={handleChange} />
              <input type="password" placeholder='Enter Pasword' className='border border-blue-700 px-2 w-80 rounded-md py-1' name="password"  
  value={form.password}
  onChange={handleChange} />
              <button className=' w-80 py-1 rounded-md bg-blue-700 text-white font-semibold' onClick={verifypassword}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrganizerLogin