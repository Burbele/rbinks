import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AftercarePage = lazy(() => import('./pages/AftercarePage'));
const AppointmentsPage = lazy(() => import('./pages/AppointmentsPage'));

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <ErrorBoundary>
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
