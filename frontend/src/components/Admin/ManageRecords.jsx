// src/components/Admin/ManageRecords.js

import React, { useState } from 'react';

const ManageRecords = () => {
  // Initial state for records
  const [records, setRecords] = useState([
    { id: 1, role: 'Student', name: 'Alice Johnson', email: 'alice.johnson@student.university.edu' },
    { id: 2, role: 'Faculty', name: 'Dr. Bob Smith', email: 'bob.smith@faculty.university.edu' },
    { id: 3, role: 'Student', name: 'David Brown', email: 'david.brown@student.university.edu' },
  ]);

  const [newRecord, setNewRecord] = useState({ role: '', name: '', email: '' });
  const [editingRecord, setEditingRecord] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  // Add a new record
  const handleAddRecord = (e) => {
    e.preventDefault();
    setRecords([...records, { id: records.length + 1, ...newRecord }]);
    setNewRecord({ role: '', name: '', email: '' });
  };

  // Edit an existing record
  const handleEditRecord = (record) => {
    setEditingRecord(record);
  };

  // Update a record
  const handleUpdateRecord = (e) => {
    e.preventDefault();
    setRecords(records.map((rec) => (rec.id === editingRecord.id ? editingRecord : rec)));
    setEditingRecord(null);
  };

  // Delete a record
  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Student and Faculty Records</h2>

      {/* Form to add or update records */}
      <form onSubmit={editingRecord ? handleUpdateRecord : handleAddRecord} className="mb-6">
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 font-medium">Role:</label>
          <select
            id="role"
            name="role"
            value={editingRecord ? editingRecord.role : newRecord.role}
            onChange={editingRecord ? (e) => setEditingRecord({ ...editingRecord, role: e.target.value }) : handleInputChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editingRecord ? editingRecord.name : newRecord.name}
            onChange={editingRecord ? (e) => setEditingRecord({ ...editingRecord, name: e.target.value }) : handleInputChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editingRecord ? editingRecord.email : newRecord.email}
            onChange={editingRecord ? (e) => setEditingRecord({ ...editingRecord, email: e.target.value }) : handleInputChange}
            className="w-full border rounded-md p-2 mt-1 text-gray-700"
            placeholder="Enter email"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          {editingRecord ? 'Update Record' : 'Add Record'}
        </button>
      </form>

      {/* List view of records */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Role</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Name</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Email</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{record.role}</td>
                <td className="py-3 px-6">{record.name}</td>
                <td className="py-3 px-6">{record.email}</td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleEditRecord(record)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRecord(record.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRecords;
