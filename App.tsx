
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
import ClaudeExamResponse from './pages/ClaudeExamResponse';
import QwenExamResponse from './pages/QwenExamResponse';
import ChatGPTExamResponse from './pages/ChatGPTExamResponse';
import DeepSeekExamResponse from './pages/DeepSeekExamResponse';
import PerplexityExamResponse from './pages/PerplexityExamResponse';
import GeminiExamResponse from './pages/GeminiExamResponse';
import GrokExamResponse from './pages/GrokExamResponse';
import MistralExamResponse from './pages/MistralExamResponse';
import KimiExamResponse from './pages/KimiExamResponse';
import CopilotExamResponse from './pages/CopilotExamResponse';
import MetaAIExamResponse from './pages/MetaAIExamResponse';
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
              <Route path="/claude-exam-response" element={<ClaudeExamResponse />} />
              <Route path="/qwen-exam-response" element={<QwenExamResponse />} />
              <Route path="/chatgpt-exam-response" element={<ChatGPTExamResponse />} />
              <Route path="/deepseek-exam-response" element={<DeepSeekExamResponse />} />
              <Route path="/perplexity-exam-response" element={<PerplexityExamResponse />} />
              <Route path="/gemini-exam-response" element={<GeminiExamResponse />} />
              <Route path="/grok-exam-response" element={<GrokExamResponse />} />
              <Route path="/mistral-exam-response" element={<MistralExamResponse />} />
              <Route path="/kimi-exam-response" element={<KimiExamResponse />} />
              <Route path="/copilot-exam-response" element={<CopilotExamResponse />} />
              <Route path="/meta-ai-exam-response" element={<MetaAIExamResponse />} />
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
