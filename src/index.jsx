import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/Auth.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import Page from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app/home" replace={true} />,
  },
  {
    path: '/form',
    children: [
      {
        path: 'register',
        element: <Page.Form isLogin={false} />
      },
      {
        path: 'login',
        element: <Page.Form isLogin={true} />
      },
    ]
  },
  {
    path: '/app',
    children: [

      {
        path: 'home',
        element: <Page.Home />,
        children: [
          {
            path: ':countryCode',
            element: <Page.Home />
          }
        ]
      },
      {
        path: 'playlist/:id',
        element: <Page.Playlist />
      }
    ]
  }
] );

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
