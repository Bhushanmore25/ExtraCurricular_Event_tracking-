import React, { useState, useRef, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
const ViewEvent = () => {
  const [events, setEvents] = useState([]); // Store events here
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [token, setToken] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const fetchRegisteredEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allevents', { withCredentials: true });
      setRegisteredEvents(response.data);
    } catch (error) {
      console.error("Error fetching registered events:", error);
    }
  };

  useEffect(() => {
    fetchRegisteredEvents();
  }, []);
  useEffect(() => {
    const storedToken = Cookies.get('token');
    setToken(storedToken);
    console.log(storedToken);

  }, []);

  // Function to fetch all events
  async function getAllEvents() {
    try {
      const response = await fetch("http://localhost:3000/allevents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        const errorText = await response.text(); // Capture error text
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const eventsData = await response.json(); // Parse JSON
      setEvents(eventsData); // Set events to state
      console.log("Fetched Events:", eventsData);
    } catch (error) {
      console.error("Failed to fetch events:", error.message);
    }
  }

  // Use useEffect to fetch events when the component mounts
  useEffect(() => {
    getAllEvents();
  }, []);

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleParticipate = () => {
    console.log("User participated in the event!");

    // Send participation details to backend via API
    // axios.post('http://localhost:5000/api/events/participate', { eventId: selectedEvent._id })
    //   .then(() => {
    //     console.log('Participation successful');
    //     window.location.href = "/eventregistrationform";  // Redirect to registration form
    //   })
    //   .catch(error => {
    //     console.error("Error during participation:", error);
    //   });

    setOpen(false);
  };

  return (
    <>
      <UserNavbar />
      <div className='flex flex-row justify-between'>
        <div>
          <Profile />
          <Sidebar />
        </div>
        <div className='mt-32 mr-16'>
          <div>
            <h3 className='text-6xl font-sans font-bold px-10'>Latest Events</h3>
            <div className="w-[70vw] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mt-16">
              <div className="p-4 bg-indigo-600 text-white text-center font-semibold text-lg">Participation Status</div>
              <div className="overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Sr No.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Event Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Event Description
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Participate Now!
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredEvents.map((event, index) => (
                      <tr className="hover:bg-gray-100" key={event._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{event.title}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{event.description}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{new Date(event.date).toLocaleDateString()}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer" onClick={() => handleOpen(event)}>
                          <FaArrowUpRightFromSquare />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Event Participation</DialogTitle>
          <DialogContent>
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4 text-center">Event Details</h2>
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Event Name</td>
                    <td className="px-4 py-2 text-gray-600">{selectedEvent.title}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Description</td>
                    <td className="px-4 py-2 text-gray-600">{selectedEvent.description}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Location</td>
                    <td className="px-4 py-2 text-gray-600">{selectedEvent.location}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Date</td>
                    <td className="px-4 py-2 text-gray-600">{new Date(selectedEvent.date).toLocaleDateString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Prizes</td>
                    <td className="px-4 py-2 text-gray-600">{selectedEvent.prize}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">Participation Benefits</td>
                    <td className="px-4 py-2 text-gray-600">{selectedEvent.benefits}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleParticipate} color="secondary" variant="contained">
              Participate
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ViewEvent;
