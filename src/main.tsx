import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { Template } from './components/organism/Template.tsx';
import { Animal } from './pages/Animal.tsx';
import { Error } from './pages/Error.tsx';
import { Reports } from './pages/Reports.tsx';
import { Settings } from './pages/Settings.tsx';
import { Home } from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template component={<Login />} />,
    errorElement: <Template component={<Error />} />,
  },
  {
    path: '/dashboard',
    element: <Template component={<Dashboard />} />,
    children: [
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: '/dashboard/animal',
        element: <Animal />
      },
      {
        path: '/dashboard/reports',
        element: <Reports />
      },
      {
        path: '/dashboard/settings',
        element: <Settings />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
