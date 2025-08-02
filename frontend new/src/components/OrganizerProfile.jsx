import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import profileimage from "../assets/images/profile.jpg"
const OrganizerProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/organizer", {
      method: 'GET',
      credentials: 'include' 
  }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    })
    .then(data => setUser(data))
    .catch(error => {
      console.error("Error fetching data:", error);
      setError(error.message);
    });
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
        <div className="bg-blue-950 w-80 rounded-lg h-[95vh] py-6 flex flex-col gap-10 fixed  top-[60px]">
            <h1 className="text-center text-white font-semibold text-lg font-sans">Organizer Profile</h1>
            <div className="flex justify-center items-center mt-6">
                <img src={user.profileImage || profileimage}alt="user_icon.png" className="w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 mt-6 justify-center items-center">
                <p className="text-white text-sm">Name: {user.name}</p>
                <p className="text-white text-sm">Email:  {user.email}</p>
            </div>
            <div>
              <Link to="/organizer">
                <li className='w-full font-semibold flex text-white justify-center items-center text-md py-2 cursor-pointer bg-blue-900'>View All Events</li>
              </Link>
              <Link to="/organizer/createevent">
                <li className='w-full font-semibold flex text-white justify-center items-center text-md py-2 cursor-pointer bg-blue-900'>Create an Event</li>
              </Link>
              
            </div>
        </div>
    </div>
  )
}

export default OrganizerProfile