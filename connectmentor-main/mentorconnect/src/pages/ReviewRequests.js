import React from 'react';

const requests = [
  { id: 1, name: 'Mentee 1', request: 'Requesting mentorship for Web Development.' },
  { id: 2, name: 'Mentee 2', request: 'Requesting guidance on Data Science.' },
];

function ReviewRequests() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Mentee Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => (
          <div key={request.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{request.name}</h2>
            <p>{request.request}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Accept</button>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded ml-2">Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewRequests;
