import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenteeSignupPage from './pages/MenteeSignupPage';
import MentorSignupPage from './pages/MentorSignupPage';
import MenteeDashboard from './pages/MenteeDashboard';
import MentorDashboard from './pages/MentorDashboard';
import ExploreMentors from './pages/ExploreMentors';
import AIChatbot from './pages/AIChatbot';
import FlexibleScheduling from './pages/FlexibleScheduling';
import Roadmap from './pages/Roadmap';


// Import Mentor Dashboard pages
import ManageMentees from './pages/ManageMentees';  // Create/manage this component
import ScheduleMeetings from './pages/ScheduleMeetings';  // Create/manage this component
import ResourcesMaterials from './pages/ResourcesMaterials';  // Create/manage this component
import ReviewRequests from './pages/ReviewRequests';  // Create/manage this component
import AIChatAssistant from './pages/AIChatAssistant';  // Create/manage this component
import PerformanceDashboard from './pages/PerformanceDashboard';  // Create/manage this component

import VideoCall from './pages/VideoCall';

function App() {
  return (
    <Router>
      <main className="flex-grow">
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mentee-signup" element={<MenteeSignupPage />} />
          <Route path="/mentor-signup" element={<MentorSignupPage />} />

          {/* Mentee-Specific Routes */}
          <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
          <Route path="/explore-mentors" element={<ExploreMentors />} />
          <Route path="/ai-chatbot" element={<AIChatbot />} />
          <Route path="/flexible-scheduling" element={<FlexibleScheduling />} />
          <Route path="/roadmap" element={<Roadmap />} />

          {/* Mentor-Specific Routes */}
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/manage-mentees" element={<ManageMentees />} />  {/* Manage Mentees */}
          <Route path="/schedule-meetings" element={<ScheduleMeetings />} />  {/* Schedule Meetings */}
          <Route path="/resources-materials" element={<ResourcesMaterials />} />  {/* Resources & Materials */}
          <Route path="/review-requests" element={<ReviewRequests />} />  {/* Review Requests */}
          <Route path="/ai-chat-assistant" element={<AIChatAssistant />} />  {/* AI Chat Assistant */}
          <Route path="/performance-dashboard" element={<PerformanceDashboard />} />  {/* Performance Dashboard */}
          <Route path="/video-call" element={<VideoCall />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
