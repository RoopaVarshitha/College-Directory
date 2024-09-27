import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Your Spring Boot backend URL

// Signup function to register a new user
export const signup = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, password, role });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Signup error:', error);
    // Improve error handling to return a user-friendly message
    throw error.response?.data || 'Signup failed';
  }
};

// Login function to authenticate a user
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password }); // Adjusted to use a login endpoint
    return response.data; // Return the data from the response
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

// Fetch student profile
export const fetchStudentProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/student/profile`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch student profile';
  }
};

// Search for other students
export const searchStudents = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/student/search`, { params: { query } });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to search students';
  }
};

// Example usage of signup function
const exampleSignup = async () => {
  const username = 'yourUsername';
  const password = 'yourPassword';
  const role = 'yourRole';

  try {
    const result = await signup(username, password, role);
    console.log('Signup successful:', result);
  } catch (error) {
    console.error('Error during signup:', error);
  }
};

// Uncomment this to run the example signup
exampleSignup();
