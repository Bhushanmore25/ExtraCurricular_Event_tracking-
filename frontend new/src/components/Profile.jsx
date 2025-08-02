import React, { useState, useEffect } from 'react';
import PieChartComponent from './PieChartComponent';
import profileimg from "../assets/images/profile.jpg"
const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user", {
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
    <div className="bg-blue-950 w-80 rounded-lg h-[95vh] p-6 fixed top-[60px]">
      <h1 className="text-center text-white font-semibold text-lg font-sans">User Profile</h1>
      <div className="flex justify-center items-center mt-6">
        <img src={user.profileImage || profileimg} alt="Profile" className="w-40 h-40 rounded-full" />
      </div>
      <div className="flex flex-col gap-2 mt-6 justify-center items-center">
        <p className="text-white text-sm">Name: {user.name}</p>
        <p className="text-white text-sm">Email: {user.email}</p>
      </div>
      {/* {user.chartData && <PieChartComponent dataValues={user.chartData.values} labels={user.chartData.labels} />} */}
      {/* <PieChartComponent dataValues={user.chartData.values} labels={user.chartData.labels} /> */}
    </div>
  );
};

export default Profile;
