import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  
  const [allStudents, setAllStudents] = useState([
    { id: 101, name: "MohanaPriya" },
    { id: 103, name: "Keerthana Raji" },

  ]);

  const [favorites, setFavorites] = useState([]);

  
  const addNewStudent = (name) => {
    const newId = allStudents.length > 0 ? Math.max(...allStudents.map(s => s.id)) + 1 : 101;
    setAllStudents([...allStudents, { id: newId, name }]);
  };

  const addToFavorites = (student) => {
    if (!favorites.find((fav) => fav.id === student.id)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ allStudents, favorites, addToFavorites, removeFromFavorites, addNewStudent }}>
      {children}
    </StudentContext.Provider>
  );
};