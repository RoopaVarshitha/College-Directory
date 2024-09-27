import React from 'react';

const FacultyDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-bold text-center">Faculty Dashboard</h1>
        <p className="mt-4 text-center">
          Welcome to the Faculty Dashboard. Here you can view and manage your courses.
        </p>
        {/* Add faculty-specific features and functionalities here */}
      </div>
    </div>
  );
};

export default FacultyDashboard;
