import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/Auth.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Form from './pages/form/Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: ':countryCode',
        element: <Home />
      }
    ]
  },
  {
    path: '/register',
    element: <Form isLogin={false} />
  },
  {
    path: '/login',
    element: <Form isLogin={true} />
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
