// src/components/Student/ContactFaculty.js

import React from 'react';

const ContactFaculty = () => {
  // Simulated faculty advisor data
  const facultyAdvisors = [
    {
      name: "Dr. Sarah Thompson",
      department: "Computer Science",
      email: "sarah.thompson@university.edu",
      phone: "+1 555 123 4567",
    },
    {
      name: "Prof. James Anderson",
      department: "Mechanical Engineering",
      email: "james.anderson@university.edu",
      phone: "+1 555 987 6543",
    },
    {
      name: "Dr. Emily Davis",
      department: "Electrical Engineering",
      email: "emily.davis@university.edu",
      phone: "+1 555 321 9876",
    },
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Faculty Advisors</h2>

      {/* List view of faculty advisors */}
      <div className="space-y-4">
        {facultyAdvisors.map((faculty, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-xl font-semibold">{faculty.name}</h3>
            <p className="text-gray-700">Department: {faculty.department}</p>
            <p className="text-gray-700">Email: {faculty.email}</p>
            <p className="text-gray-700">Phone: {faculty.phone}</p>

            {/* Contact buttons */}
            <div className="mt-4 flex space-x-4">
              <a
                href={`mailto:${faculty.email}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Email
              </a>
              <a
                href={`tel:${faculty.phone}`}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFaculty;
