// src/components/Student/SearchStudents.js

import React, { useState } from 'react';

const SearchStudents = () => {
  // Simulated student data
  const studentsData = [
    { name: "Alice Johnson", department: "Computer Science", year: "3rd" },
    { name: "Bob Smith", department: "Mechanical Engineering", year: "2nd" },
    { name: "Catherine Lee", department: "Electrical Engineering", year: "1st" },
    { name: "David Brown", department: "Civil Engineering", year: "4th" },
    { name: "Eva Green", department: "Computer Science", year: "3rd" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [filterYear, setFilterYear] = useState("");

  // Function to handle the filtering logic
  const filteredStudents = studentsData.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDept === "" || student.department === filterDept) &&
      (filterYear === "" || student.year === filterYear)
    );
  });

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search for Students</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />

      {/* Filters */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <select
          className="border rounded p-2"
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>

        <select
          className="border rounded p-2"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">All Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <div
              key={index}
              className="border rounded p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xl font-semibold">{student.name}</h3>
              <p className="text-gray-600">Department: {student.department}</p>
              <p className="text-gray-600">Year: {student.year}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No students found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchStudents;
