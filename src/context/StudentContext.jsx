import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  // Use state for allStudents so we can add to it
  const [allStudents, setAllStudents] = useState([
    { id: 101, name: "MohanaPriya" },

    { id: 102, name: "Santhosh" },

    { id: 103, name: "Keerthana Raji" },

    { id: 104, name: "ArumanSalik" },

    { id: 105, name: "MahaLakshmi" },

    { id: 106, name: "Selva Mani" },
  ]);

  const [favorites, setFavorites] = useState([]);

  // Function to add a brand new student to the master list
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