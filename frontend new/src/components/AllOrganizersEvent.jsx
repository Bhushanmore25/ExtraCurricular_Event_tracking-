import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const AllOrganizersEvent = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/events", { withCredentials: true });
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleOpen = () => {
    window.location.href = "/viewstudents";
  };

  return (
    <>
      <div className="h-[75vh]">
        <h3 className="text-6xl mt-16 font-sans font-bold px-10">
          Created Events
        </h3>
        <div className="w-[70vw] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mt-16">
          <div className="p-4 bg-indigo-600 text-white text-center font-semibold text-lg">
            Participation Status
          </div>
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
                    Check Participations
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
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
                    <td
                      className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer"
                      onClick={handleOpen}
                    >
                      <FaArrowUpRightFromSquare />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrganizersEvent;
