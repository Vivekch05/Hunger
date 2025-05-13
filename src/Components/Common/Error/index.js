import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = ({ message = 'Oops! Something went wrong.' }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error illustration"
        className="w-40 h-40 mb-8 opacity-80"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Error</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">{message}</p>
      <button
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error; 