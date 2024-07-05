import React, { useState } from 'react';
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/outline';

const Accordion = ({ title, content, isLocked, onClick }) => {
  return (
    <div className="border-b border-gray-600">
      <button
        className={`w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none ${isLocked ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={onClick}
        disabled={isLocked}
      >
        <div className="flex items-center">
          <span>{title}</span>
          {isLocked && <LockClosedIcon className="ml-2 h-5 w-5 text-gray-500" />}
        </div>
        <span>{isLocked ? <LockClosedIcon className="h-5 w-5" /> : <LockOpenIcon className="h-5 w-5" />}</span>
      </button>
    </div>
  );
};

export default Accordion;
