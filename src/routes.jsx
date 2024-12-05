import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Logout from './components/Logout';
import HomePage from './pages/Home'; // Importar la página Home
import ProtectedRoute from './components/ProtectedRoute';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/home" 
        element={
          <ProtectedRoute allowedRoles={['USER', 'EMPRESA']}>
            <HomePage />
          </ProtectedRoute>
        } 
      />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default AppRoutes;
