import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const KaziraAutomatePage = lazy(() => import('./pages/KaziraAutomatePage'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const RouteLoading = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
    <span className="font-mono text-xs uppercase tracking-widest text-black/50">Loading page…</span>
  </div>
);

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/automate" element={<KaziraAutomatePage />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
