import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Added Link import
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from './components/StudentDashboard';
import ViewProfile from './components/Student/ViewProfile';
import SearchStudents from './components/Student/SearchStudents';
import ContactFaculty from './components/Student/ContactFaculty';
import ManageClassList from './components/Faculty/ManageClassList';
import UpdateProfile from './components/Faculty/UpdateProfile';
import ManageRecords from './components/Admin/ManageRecords';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#282e3e] p-4"> {/* Dark Sea Blue */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">College Directory</h1>
        </header>

        <nav className="bg-white shadow-md p-6 mb-4 rounded">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/student/view-profile" className="text-blue-600 text-2m hover:underline">View Profile</Link>
            </li>
            <li>
              <Link to="/student/search-students" className="text-blue-600 text-2m hover:underline">Search Students</Link>
            </li>
            <li>
              <Link to="/student/contact-faculty" className="text-blue-600 text-2m hover:underline">Contact Faculty</Link>
            </li>
            <li>
              <Link to="/faculty/manage-class-list" className="text-blue-600 text-2m hover:underline">Manage Class List</Link>
            </li>
            <li>
              <Link to="/faculty/update-profile" className="text-blue-600 text-2m hover:underline">Update Profile</Link>
            </li>
            <li>
              <Link to="/admin/manage-records" className="text-blue-600 text-2m hover:underline">Manage Records</Link>
            </li>
            <li>
              <Link to="/admin/dashboard" className="text-blue-600 text-2m hover:underline">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/view-profile" element={<ViewProfile />} />
          <Route path="/student/search-students" element={<SearchStudents />} />
          <Route path="/student/contact-faculty" element={<ContactFaculty />} />
          <Route path="/faculty/manage-class-list" element={<ManageClassList />} />
          <Route path="/faculty/update-profile" element={<UpdateProfile />} />
          <Route path="/admin/manage-records" element={<ManageRecords />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
