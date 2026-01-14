import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import StudentList from './pages/StudentList';
import Favorites from './pages/Favorites';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 p-4 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold tracking-tight">Student Portal</h1>
              <div className="space-x-6">
                <Link to="/" className="hover:text-blue-200 transition-colors">Student List</Link>
                <Link to="/favorites" className="hover:text-blue-200 transition-colors">Favourites</Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto mt-8 p-4">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;