// src/components/Signup.js
import React, { useState } from 'react';
import { signup } from '../api/api'; // Import your signup function

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await signup(username, password, role);
      if (response && response.status === 201) {
        setSuccess('Signup successful! You can now log in.');
        // Reset form fields
        setUsername('');
        setPassword('');
        setRole('student');
      } else {
        // Handle unexpected response here
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      // Check if the error object has a message, else use a default message
      setError(err.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {/* Error and success messages */}
        {error && <div className="p-4 text-red-500 border border-red-400 rounded">{error}</div>}
        {success && <div className="p-4 text-green-500 border border-green-400 rounded">{success}</div>}
        
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>

          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
