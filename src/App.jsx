import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load the page components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AftercarePage = lazy(() => import('./pages/AftercarePage'));
const AppointmentsPage = lazy(() => import('./pages/AppointmentsPage'));

// Loading component to show while a page is being lazy loaded
const Loading = () => <div>Loading...</div>;

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <ErrorBoundary>
          {/* Suspense component to lazy load the HomePage */}
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <ErrorBoundary>
          {/* Suspense component to lazy load the AboutPage */}
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <ErrorBoundary>
          {/* Suspense component to lazy load the GalleryPage */}
          <Suspense fallback={<Loading />}>
            <GalleryPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    ),
  },
  {
    path: '/aftercare',
    element: (
      <Layout>
        <ErrorBoundary>
          {/* Suspense component to lazy load the AftercarePage */}
          <Suspense fallback={<Loading />}>
            <AftercarePage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    ),
  },
  {
    path: '/appointments',
    element: (
      <Layout>
        <ErrorBoundary>
          {/* Suspense component to lazy load the AppointmentsPage */}
          <Suspense fallback={<Loading />}>
            <AppointmentsPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
