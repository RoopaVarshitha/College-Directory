// src/components/Faculty/UpdateProfile.js

import React, { useState } from 'react';

const UpdateProfile = () => {
  // Initial profile state
  const [profile, setProfile] = useState({
    officeHours: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle form submission (e.g., call an API to update the profile)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send `profile` data to the server here
    console.log("Updated Profile Data:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      {/* Profile Update Form */}
      <form onSubmit={handleSubmit}>
        {/* Office Hours */}
        <div className="mb-4">
          <label htmlFor="officeHours" className="block text-gray-700 font-medium">
            Office Hours:
          </label>
          <input
            type="text"
            id="officeHours"
            name="officeHours"
            value={profile.officeHours}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            placeholder="Enter your office hours"
            required
          />
        </div>

        {/* Contact Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Contact Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            placeholder="Enter your contact email"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
