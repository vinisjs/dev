import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/organism/Layout.tsx';
import { Login } from './pages/Login.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { Animal } from './pages/Animal.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Login /> },
      { path: 'app', element: <Login /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'app', element: <Dashboard /> },
      { path: 'animal', element: <Animal /> },
    ],
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
