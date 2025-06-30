import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import Calendar CSS

function FlexibleScheduling() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [savedSchedule, setSavedSchedule] = useState(null);
  const [mentor, setMentor] = useState(null);

  // Fetch the mentor and schedule from localStorage
  useEffect(() => {
    const schedule = JSON.parse(localStorage.getItem('schedule'));
    const mentor = JSON.parse(localStorage.getItem('selectedMentor'));
    if (schedule) setSavedSchedule(schedule);
    if (mentor) setMentor(mentor);
  }, []);

  // Highlight selected schedule in calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Flexible Scheduling</h1>

      {mentor && savedSchedule ? (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Mentor: <span className="text-green-600">{mentor.name}</span>
          </h2>
          <p className="text-xl text-gray-700">
            Scheduled Date: <span className="text-blue-600">{format(new Date(savedSchedule.date), 'MMMM dd, yyyy')}</span>
          </p>
          <p className="text-xl text-gray-700">
            Scheduled Time: <span className="text-blue-600">{savedSchedule.time}</span>
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-600">No schedule selected.</p>
      )}

      {/* Calendar with selected schedule highlighted */}
      <div className="flex justify-center items-center mb-10">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={({ date }) =>
            savedSchedule && new Date(savedSchedule.date).toDateString() === date.toDateString()
              ? 'bg-blue-500 text-white rounded-full'
              : ''
          }
        />
      </div>

      {/* Display a message if no mentor or schedule */}
      {!mentor || !savedSchedule ? (
        <p className="text-center text-red-500">Please select a mentor and schedule a session to see it here.</p>
      ) : null}
    </div>
  );
}

export default FlexibleScheduling;
