

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='app_bg'>
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<PostOverview />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

