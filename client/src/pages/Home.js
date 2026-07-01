import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to MERN App</h1>
      <p>
        This is a full-stack application built with MongoDB, Express, React, and Node.js.
      </p>
      <div className="home-buttons">
        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Home;
