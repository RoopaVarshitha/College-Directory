import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
        <p className="mt-4 text-center">
          Welcome to the Admin Dashboard. Here you can manage the entire application.
        </p>
        {/* Add admin-specific features and functionalities here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
