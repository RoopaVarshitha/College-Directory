// src/components/Student/ViewProfile.js

import React from 'react';

const ViewProfile = () => {
  // Simulated student data
  const studentData = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150", // You can replace this with an actual photo URL
    contact: {
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
    },
    academicInfo: {
      courses: [
        { name: "Mathematics", grade: "A", attendance: "95%" },
        { name: "Physics", grade: "B", attendance: "92%" },
        { name: "Computer Science", grade: "A+", attendance: "98%" },
      ],
    },
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      <div className="flex items-center mb-6">
        <img
          src={studentData.photo}
          alt="Student Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-3xl font-bold mb-1">{studentData.name}</h2>
          <p className="text-gray-700">Email: {studentData.contact.email}</p>
          <p className="text-gray-700">Phone: {studentData.contact.phone}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Academic Information</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Course</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Grade</th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {studentData.academicInfo.courses.map((course, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-2 px-4 text-gray-700">{course.name}</td>
              <td className="py-2 px-4 text-gray-700">{course.grade}</td>
              <td className="py-2 px-4 text-gray-700">{course.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProfile;
