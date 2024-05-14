import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './ui/App.jsx';
import { LoginPage } from '../pages/Login/index.js';
import { InstanciesPage } from '../pages/Instancies/index.js';
import { MachinesPage } from '../pages/Machines/index.js';
import { AuthRequired } from '../features/AuthRequired/index.js';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LoginPage />} />
          <Route
            path="/instancies"
            element={
              <AuthRequired>
                <InstanciesPage />
              </AuthRequired>
            }
          />
          <Route
            path="/machines"
            element={
              <AuthRequired>
                <MachinesPage />
              </AuthRequired>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
