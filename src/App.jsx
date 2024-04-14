import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector'
// import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import AftercarePage from './pages/AftercarePage';
import AppointmentsPage from './pages/AppointmentsPage';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/aftercare',
    element: <AftercarePage />,
  },
  {
    path: '/appointments',
    element: <AppointmentsPage />,
  }
]);

function App() {
  

  return (
      <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
        <Header />
        <RouterProvider router={router} />
        <Footer />
        <Copyright />
      </div>
  )
}

export default App
