import React, { useState } from 'react';
import Accordion from './Accordion';

const Sidebar = ({ onSelectCourse }) => {
  const [isLocked, setIsLocked] = useState(false);

  const courses = [
    { title: "Course 1", content: "Content for Course 1", isLocked: false },
    { title: "Course 2", content: "Content for Course 2", isLocked: true },
    { title: "Course 3", content: "Content for Course 3", isLocked: false },
    { title: "Course 4", content: "Content for Course 4", isLocked: true },
    { title: "Course 5", content: "Content for Course 5", isLocked: false },
    { title: "Course 6", content: "Content for Course 6", isLocked: true },
  ];

  return (
    <div className="w-64 h-full bg-black text-white shadow-md">
      <div className="p-4 flex justify-between items-center border-b border-gray-600">
        <span>Sidebar</span>
        <button
          className="text-sm bg-gray-700 px-2 py-1 rounded"
          onClick={() => setIsLocked(!isLocked)}
        >
          {isLocked ? 'Unlock All' : 'Lock All'}
        </button>
      </div>
      <div className={isLocked ? 'pointer-events-none opacity-50' : ''}>
        {courses.map((course, index) => (
          <Accordion
            key={index}
            title={course.title}
            content={course.content}
            isLocked={isLocked || course.isLocked}
            onClick={() => onSelectCourse(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
