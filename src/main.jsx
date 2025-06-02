import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from '../pages/Home.js';
import './index.css'; // ou seu arquivo de estilo principal
import './app.css'; // ou seu arquivo de estilo principal

// 1. Defina suas rotas
const router = createBrowserRouter([
  {
    path: "/", // Rota raiz
    element: <App />, // Componente principal/layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "sobre",
      //   element: <Sobre />,
      // },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
]);

// 2. Renderize o RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);