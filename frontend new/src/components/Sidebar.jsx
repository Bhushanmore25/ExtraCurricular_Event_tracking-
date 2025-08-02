// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuLinks, setMenuLinks] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/menuLinks')
//       .then(response => response.json())
//       .then(data => setMenuLinks(data))
//       .catch(error => console.error('Error fetching menu links:', error));
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative h-screen flex items-start">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//         <nav className="space-y-4">
//           {menuLinks.map(link => (
//             <Link key={link.label} to={link.path} className="text-white block">
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Sidebar Toggle Icon */}
//       <button
//         onClick={toggleSidebar}
//         className={`fixed top-2 ${isOpen ? 'left-64' : 'left-4'} z-50 text-white bg-gray-800 p-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out`}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen flex items-start">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="space-y-4">
          <Link to="/user" className="text-white block">
            Home
          </Link>
          <Link to="/registerevent" className="text-white block">
            Register for an Event
          </Link>
          <Link to="/viewevents" className="text-white block">
            View new Events
          </Link>
          <Link to="/Logout" className="text-white block">
            Logout
          </Link>
          <a href="#" className="text-white block">
            Settings
          </a>
        </nav>
      </div>

      {/* Sidebar Toggle Icon */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-2 ${
          isOpen ? 'left-64' : 'left-4'
        } z-50 text-white bg-gray-800 p-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out`}
      >
        {/* Sidebar icon (you can use any icon here) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;   