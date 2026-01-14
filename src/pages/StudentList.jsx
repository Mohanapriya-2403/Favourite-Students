import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { allStudents, addToFavorites, favorites, addNewStudent } = useContext(StudentContext);
  const [newName, setNewName] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      addNewStudent(newName);
      setNewName(""); 
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <h3 className="text-lg font-bold mb-4">Add New Student to Registry</h3>
        <form onSubmit={handleAddSubmit} className="flex gap-2">
          <input 
            type="text" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter Student Name"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Add Student
          </button>
        </form>
      </div>

      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">All Students</h2>
      <div className="grid gap-4">
        {allStudents.map((student) => {
          const isAdded = favorites.some((fav) => fav.id === student.id);
          return (
            <div key={student.id} className="flex items-center justify-between p-5 bg-white rounded-xl shadow-sm border border-gray-200">
              <div>
                <p className="text-lg font-semibold text-gray-700">{student.name}</p>
                <p className="text-sm text-gray-400">ID: {student.id}</p>
              </div>
              <button 
                onClick={() => addToFavorites(student)} 
                disabled={isAdded}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isAdded 
                  ? "bg-gray-200 text-gray-500" 
                  : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {isAdded ? "Added" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;