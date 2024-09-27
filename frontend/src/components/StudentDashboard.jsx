import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-bold text-center">Student Dashboard</h1>
        <p className="mt-4 text-center">
          Welcome to the Student Dashboard. Here you can access your courses and grades.
        </p>
        {/* Add student-specific features and functionalities here */}
      </div>
    </div>
  );
};

export default StudentDashboard;
