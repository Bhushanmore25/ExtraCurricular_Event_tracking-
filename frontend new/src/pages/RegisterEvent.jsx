import React, { useState } from 'react';
import UserNavbar from '../components/UserNavbar';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';

const RegisterEvent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    location:'',
    date: '',
    status: '',
    experienceGained: '',
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter(skill => skill !== value);
      setFormData({ ...formData, skills: newSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const newform = { ...formData };
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

const response = await fetch("http://localhost:3000/registerevent", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(newform),
    credentials: 'include',  
});

      if (!response.ok) {
        throw new Error('Failed to save password');
      }
  
      setFormData({ eventName: '',
        description: '',
        location:'',
        date: '',
        status: '',
        experienceGained: '',
        skills: []});
      navigate('/user');
      
    } catch (error) {
      navigate('/login');
      console.error('Error saving password:', error.message);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className='flex flex-row justify-between overflow-auto'>
        <div>
          <Profile />
          <Sidebar />
        </div>
        <div className='w-[78vw] mt-14  '>
          {/* Form for registering event */}
          <form
            className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-200'
            onSubmit={handleSubmit}
          >
            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
              Register Event
            </h2>

            {/* Event Name */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Event Name
              </label>
              <input
                type='text'
                name='eventName'
                value={formData.eventName}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter event name'
                required
              />
            </div>
            
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Event Location
              </label>
              <input
                type='text'
                name='location'
                value={formData.location}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter event location'
                required
              />
            </div>

            {/* Description */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Description
              </label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter event description'
                rows='4'
                required
              />
            </div>

            {/* Date */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Event Date
              </label>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>

            {/* Status */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Status
              </label>
              <select
                name='status'
                value={formData.status}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              >
                <option value=''>Select Status</option>
                <option value='Winner'>Winner</option>
                <option value='Participated'>Participated</option>
              </select>
            </div>

            {/* Experience Gained */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Experience Gained
              </label>
              <input
                type='text'
                name='experienceGained'
                value={formData.experienceGained}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='What did you learn?'
                required
              />
            </div>

            {/* Skills */}
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Skills Developed
              </label>
              <div className='flex flex-wrap gap-4'>
                {['Speaking', 'Listening', 'Teamwork', 'Coordination', 'Art', 'Gaming', 'Sports'].map((skill, index) => (
                  <div key={index} className='flex items-center'>
                    <input
                      type='checkbox'
                      id={skill}
                      name='skills'
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                      className='mr-2 leading-tight'
                    />
                    <label htmlFor={skill} className='text-gray-700'>
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Submit Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;
