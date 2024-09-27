import React, { useState } from 'react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role set to 'student'
  const [error, setError] = useState('');
  
  // Initialize the useNavigate hook for navigation
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await login(username, password, role); // Pass role to the login function
      console.log('Login successful:', data);
      // Handle successful login (e.g., store token and redirect to dashboard)

      // Redirect to the dashboard based on the role
      switch (role) {
        case 'admin':
          navigate('/admin/dashboard'); // Admin dashboard route
          break;
        case 'faculty':
          navigate('/faculty/dashboard'); // Faculty dashboard route
          break;
        case 'student':
        default:
          navigate('/student/dashboard'); // Student dashboard route
          break;
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/signup')} 
            className="mt-4 text-blue-600 hover:underline"
          >
            Don't have an account? Sign up here.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
