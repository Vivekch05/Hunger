import React from 'react';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      <span className="relative flex h-16 w-16 mb-4">
        <span className="animate-spin absolute inline-flex h-full w-full rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 opacity-30"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent"></span>
      </span>
      <span className="text-lg font-semibold text-amber-600 animate-pulse">{text}</span>
    </div>
  );
};

export default Loader; 