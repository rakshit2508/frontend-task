import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  const courseName = "React Development";
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="flex-1 flex flex-col">
        <Header courseName={courseName} />
        <div className="p-4">
          {selectedCourse ? (
            <>
              <h1 className="text-2xl font-bold">{selectedCourse.title}</h1>
              <p>{selectedCourse.content}</p>
            </>
          ) : (
            <h1 className="text-2xl font-bold">Welcome to the {courseName} Course!</h1>
          )}
        </div>
      </div>
      <Sidebar onSelectCourse={setSelectedCourse} />
    </div>
  );
};

export default App;
