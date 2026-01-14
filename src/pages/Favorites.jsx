import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(StudentContext);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">My Favourite List</h2>
      
      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-300">
          <p className="text-xl text-gray-500">Your favourite list is currently empty.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {favorites.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-5 bg-white rounded-xl shadow-sm border-l-4 border-red-500">
              <p className="text-lg font-semibold text-gray-700">{student.name}</p>
              <button 
                onClick={() => removeFromFavorites(student.id)} 
                className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;