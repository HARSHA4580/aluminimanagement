import React from 'react';

const mentees = [
  { id: 1, name: 'Mentee 1', progress: '80%' },
  { id: 2, name: 'Mentee 2', progress: '60%' },
  { id: 3, name: 'Mentee 3', progress: '95%' },
];

function ManageMentees() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Manage Mentees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentees.map((mentee) => (
          <div key={mentee.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{mentee.name}</h2>
            <p>Progress: <span className="text-green-600">{mentee.progress}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageMentees;
