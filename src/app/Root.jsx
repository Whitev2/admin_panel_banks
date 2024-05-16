import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './ui/App.jsx';
import { LoginPage } from '../pages/Login/';
import { MachinesPage } from '../pages/Machines/';
import { AuthRequired } from '../features/AuthRequired';
import { InstanciesPage } from '../pages/Instancies';
import { ProjectsPage } from '../pages/Projects';
import { InstancePage } from '../pages/InstancePage';

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
            path="/instance/:id"
            element={
              <AuthRequired>
                <InstancePage />
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
          <Route
            path="/projects"
            element={
              <AuthRequired>
                <ProjectsPage />
              </AuthRequired>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
