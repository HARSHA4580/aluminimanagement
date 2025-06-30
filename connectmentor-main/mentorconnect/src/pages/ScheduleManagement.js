import React, { useState } from 'react';

function ScheduleManagement() {
  const [schedule, setSchedule] = useState({ date: '', time: '' });

  const handleDateChange = (e) => {
    setSchedule({ ...schedule, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setSchedule({ ...schedule, time: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Schedule Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Set Your Availability</h2>
        <input type="date" onChange={handleDateChange} className="mt-2 p-2 border rounded w-full"/>
        <input type="time" onChange={handleTimeChange} className="mt-2 p-2 border rounded w-full"/>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Confirm</button>
      </div>
    </div>
  );
}

export default ScheduleManagement;
