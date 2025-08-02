import React, { useState } from 'react';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventName: '',
    participationType: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.eventName) formErrors.eventName = "Event Name is required";
    if (!formData.participationType) formErrors.participationType = "Participation type is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Registration successful', formData);
      alert('Registration successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventName: '',
        participationType: '',
        additionalInfo: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Event Registration Form</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>

        {/* Event Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the event name"
          />
          {errors.eventName && <p className="text-red-500 text-xs italic">{errors.eventName}</p>}
        </div>

        {/* Participation Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="participationType">
            Participation Type
          </label>
          <select
            name="participationType"
            id="participationType"
            value={formData.participationType}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select participation type</option>
            <option value="Individual">Individual</option>
            <option value="Team">Team</option>
          </select>
          {errors.participationType && <p className="text-red-500 text-xs italic">{errors.participationType}</p>}
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
            Additional Information (Optional)
          </label>
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Any other relevant information"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
