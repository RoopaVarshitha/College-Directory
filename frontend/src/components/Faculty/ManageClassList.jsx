// src/components/Faculty/ManageClassList.js

import React from 'react';

const ManageClassList = () => {
  // Simulated student data
  const students = [
    {
      name: "Alice Johnson",
      photo: "https://via.placeholder.com/50",
      email: "alice.johnson@student.university.edu",
      phone: "+1 555 123 4567",
    },
    {
      name: "Bob Smith",
      photo: "https://via.placeholder.com/50",
      email: "bob.smith@student.university.edu",
      phone: "+1 555 987 6543",
    },
    {
      name: "Catherine Lee",
      photo: "https://via.placeholder.com/50",
      email: "catherine.lee@student.university.edu",
      phone: "+1 555 321 9876",
    },
    {
      name: "David Brown",
      photo: "https://via.placeholder.com/50",
      email: "david.brown@student.university.edu",
      phone: "+1 555 654 9876",
    },
  ];

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Class List</h2>

      {/* Table for student list */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Photo</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Name</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Email</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Phone</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-6 text-gray-800 font-medium">{student.name}</td>
                <td className="py-3 px-6 text-gray-600">
                  <a
                    href={`mailto:${student.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {student.email}
                  </a>
                </td>
                <td className="py-3 px-6 text-gray-600">
                  <a
                    href={`tel:${student.phone}`}
                    className="text-green-500 hover:underline"
                  >
                    {student.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClassList;
