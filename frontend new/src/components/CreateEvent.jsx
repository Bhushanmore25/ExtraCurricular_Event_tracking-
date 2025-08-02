import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateEvent = () =>  {
  const navigate = useNavigate();
    const [eventData, setEventData] = useState({
      title: '',
      description: '',
      location: '',
      prize: '',
      skills: '',
      benefits: '',
      date: '',
      time: '',
      swags: '',
      refreshment: '',
      contact: '',
      sponsors: '',
    });
  
    const handleChange = (e) => {
      setEventData({ ...eventData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log('Event Data:', eventData);
      const newform = { ...eventData };
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

const response = await fetch("http://localhost:3000/createevent", {
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
      // navigate('/organizer');
      window.location.href = "/organizer"
      
    } catch (error) {
      navigate('/organizer/createevent');
      console.error('Error saving password:', error.message);
    }
    };
  
    return (
      <div className="w-[70vw] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Organize a New Event</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-gray-700">Event Title</label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Event Description */}
          <div>
            <label className="block text-gray-700">Event Description</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Location */}
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Prize */}
          <div>
            <label className="block text-gray-700">Prize</label>
            <input
              type="text"
              name="prize"
              value={eventData.prize}
              onChange={handleChange}
              placeholder="Enter event prize details"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Skills Required */}
          <div>
            <label className="block text-gray-700">Skills Required</label>
            <input
              type="text"
              name="skills"
              value={eventData.skills}
              onChange={handleChange}
              placeholder="Enter required skills"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Benefits */}
          <div>
            <label className="block text-gray-700">Benefits (Certification)</label>
            <input
              type="text"
              name="benefits"
              value={eventData.benefits}
              onChange={handleChange}
              placeholder="Enter event benefits"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Date */}
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Time */}
          <div>
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Swags */}
          <div>
            <label className="block text-gray-700">Swags</label>
            <input
              type="text"
              name="swags"
              value={eventData.swags}
              onChange={handleChange}
              placeholder="Enter details about swags"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Refreshment */}
          <div>
            <label className="block text-gray-700">Refreshment</label>
            <input
              type="text"
              name="refreshment"
              value={eventData.refreshment}
              onChange={handleChange}
              placeholder="Enter refreshment details"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Contact Information */}
          <div>
            <label className="block text-gray-700">Organizer Contact Info</label>
            <input
              type="text"
              name="contact"
              value={eventData.contact}
              onChange={handleChange}
              placeholder="Enter organizer's contact information"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
  
          {/* Sponsors */}
          <div>
            <label className="block text-gray-700">Sponsors</label>
            <input
              type="text"
              name="sponsors"
              value={eventData.sponsors}
              onChange={handleChange}
              placeholder="Enter event sponsors (if any)"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    );
  };

export default CreateEvent