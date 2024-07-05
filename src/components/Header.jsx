import React from 'react';

const Header = ({ courseName }) => {
  return (
    <div className="w-full p-4 bg-black text-white flex justify-between items-center border-b border-gray-600">
      <span className="text-lg font-bold">Course Dashboard</span>
      <span>{courseName}</span>
    </div>
  );
};

export default Header;
