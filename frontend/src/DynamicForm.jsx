// src/DynamicForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicForm = () => {
  const [emails, setEmails] = useState(['']);
  const [allEmails, setAllEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/emails');
      setAllEmails(response.data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleChange = (index, event) => {
    const newEmails = emails.map((email, i) => (i === index ? event.target.value : email));
    setEmails(newEmails);
  };

  const handleAddField = () => {
    setEmails([...emails, '']);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/emails', { emails });
      fetchEmails(); // Refresh email list after submission
    } catch (error) {
      console.error('Error submitting emails:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">Dynamic Email Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {emails.map((email, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => handleChange(index, event)}
              required
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleAddField}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Email Field
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-5">Entered Emails:</h2>
      <ul className="list-disc list-inside">
        {allEmails.map((email, index) => (
          <li key={index} className="text-gray-700">{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicForm;
