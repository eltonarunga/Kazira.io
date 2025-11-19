import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import KaziraLearnMVP from './pages/KaziraLearnMVP';
import LoginPage from './pages/LoginPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useAuth } from './hooks/useAuth';
import KenyaFinalAIExam from './pages/KenyaFinalAIExam';
import AIModelResults from './pages/AIModelResults';
import ErrorBoundary from './components/common/ErrorBoundary';
import UserProfilePage from './pages/UserProfilePage';
import Chatbot from './components/common/Chatbot';

// FIX: Changed to React.FC to correctly handle children prop type.
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/kenya-ai-exam" element={<KenyaFinalAIExam />} />
              <Route path="/ai-model-results" element={<AIModelResults />} />
              <Route 
                path="/learn" 
                element={
                  <ProtectedRoute>
                    <KaziraLearnMVP />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <UserProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/automate" 
                element={
                  <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Kazira Automate</h1>
                    <p className="text-xl text-gray-700">Coming Soon! Stay tuned for AI-powered business process automation.</p>
                  </div>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;