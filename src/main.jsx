import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import HomeComponents from './components/HomeComponents/HomeComponents.jsx';
import Contact from './components/ContactPage/Contact.jsx';
import Layout from './components/Layout.jsx';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay.jsx';
import { projects } from './components/data.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path="/" element={<HomeComponents />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="/project/:projectId" element={<ProjectDisplay projects={projects} />} /> {/* Dynamic Route */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
