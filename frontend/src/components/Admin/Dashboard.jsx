// src/components/Admin/Dashboard.js

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Data for Student Enrollment Trends (Line Chart)
  const studentEnrollmentData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: [120, 150, 170, 200, 230, 250],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const studentEnrollmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Enrollment Trends (2018-2023)',
      },
    },
  };

  // Data for Faculty Course Loads (Bar Chart)
  const facultyCourseLoadData = {
    labels: ['Dr. Alice Johnson', 'Dr. Bob Smith', 'Dr. Carol White', 'Dr. David Green'],
    datasets: [
      {
        label: 'Courses Assigned',
        data: [3, 5, 2, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const facultyCourseLoadOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Faculty Course Loads',
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Student Enrollment Trends Chart */}
      <div className="mb-8">
        <Line data={studentEnrollmentData} options={studentEnrollmentOptions} />
      </div>

      {/* Faculty Course Loads Chart */}
      <div className="mb-8">
        <Bar data={facultyCourseLoadData} options={facultyCourseLoadOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
