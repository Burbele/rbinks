import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import components
import Layout from './components/Layout';
// import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import AftercarePage from './pages/AftercarePage';
import AppointmentsPage from './pages/AppointmentsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
  },
  {
    path: '/aftercare',
    element: (
      <Layout>
        <AftercarePage />
      </Layout>
    ),
  },
  {
    path: '/appointments',
    element: (
      <Layout>
        <AppointmentsPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
