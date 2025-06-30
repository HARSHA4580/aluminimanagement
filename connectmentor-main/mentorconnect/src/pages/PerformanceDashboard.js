import React from 'react';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadarController, RadialLinearScale } from 'chart.js';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

function PerformanceDashboard() {
  // Sample data for performance (customize it based on your needs)
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Mentee Progress (%)',
        data: [60, 65, 70, 75, 80, 85],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis'],
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: [85, 90, 78, 92],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis'],
    datasets: [
      {
        label: 'Mentee Engagement',
        data: [30, 25, 20, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Sessions Completed', 'Sessions Pending'],
    datasets: [
      {
        label: 'Session Status',
        data: [70, 30],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const radarData = {
    labels: ['Communication', 'Technical Skills', 'Time Management', 'Problem Solving', 'Teamwork'],
    datasets: [
      {
        label: 'Skills Assessment',
        data: [5, 4, 3, 4, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Performance Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Line Chart for Progress Over Time */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentee Progress</h2>
            <Line data={lineData} options={chartOptions} />
          </div>

          {/* Bar Chart for Completion Rate */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Completion Rate</h2>
            <Bar data={barData} options={chartOptions} />
          </div>

          {/* Pie Chart for Mentee Engagement */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentee Engagement</h2>
            <Pie data={pieData} options={chartOptions} />
          </div>

          {/* Doughnut Chart for Session Status */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Session Status</h2>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>

          {/* Radar Chart for Skills Assessment */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills Assessment</h2>
            <Radar data={radarData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceDashboard;
