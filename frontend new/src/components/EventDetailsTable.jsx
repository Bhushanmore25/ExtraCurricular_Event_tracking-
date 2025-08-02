import React from 'react';

const EventDetailsTable = () => {
  const eventDetails = {
    eventName: "Annual Tech Conference",
    description: "A conference about the latest in tech innovations.",
    location: "San Francisco, CA",
    date: "December 1, 2024",
    organizer: "Tech Innovators Inc.",
    organizerInfo: "Contact: John Doe, Email: john.doe@example.com",
    chiefGuest: "Elon Musk",
    participationFees: "$100",
    participationBenefit: "Networking, Free Lunch, and Swag",
    prizes: "First Prize: $5000, Runner-up: $2000",
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Event Details</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <tbody>
          {/* Row for each event detail */}
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Event Name</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.eventName}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Description</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.description}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Location</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.location}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Date</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.date}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Organizer</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.organizer}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Organizer Information</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.organizerInfo}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Chief Guest</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.chiefGuest}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Participation Fees</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.participationFees}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold text-gray-700">Participation Benefit</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.participationBenefit}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold text-gray-700">Prizes</td>
            <td className="px-4 py-2 text-gray-600">{eventDetails.prizes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventDetailsTable;
