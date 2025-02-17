import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router';

import Layout from './Components/Layout';
import { Discover, Home, Login } from './Components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
