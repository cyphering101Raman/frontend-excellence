import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 p-4 bg-purple-400">
      <Link to="/signup">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Home;