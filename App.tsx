
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
import QwenQ2ExamResponse from './pages/QwenQ2ExamResponse';
import ChatGPTExamResponse from './pages/ChatGPTExamResponse';
import ChatGPTQ2ExamResponse from './pages/ChatGPTQ2ExamResponse';
import ClaudeQ2ExamResponse from './pages/ClaudeQ2ExamResponse';
import DeepSeekExamResponse from './pages/DeepSeekExamResponse';
import DeepSeekQ2ExamResponse from './pages/DeepSeekQ2ExamResponse';
import PerplexityExamResponse from './pages/PerplexityExamResponse';
import PerplexityQ2ExamResponse from './pages/PerplexityQ2ExamResponse';
import GeminiExamResponse from './pages/GeminiExamResponse';
import GeminiQ2ExamResponse from './pages/GeminiQ2ExamResponse';
import GrokExamResponse from './pages/GrokExamResponse';
import GrokQ2ExamResponse from './pages/GrokQ2ExamResponse';
import MistralExamResponse from './pages/MistralExamResponse';
import MistralQ2ExamResponse from './pages/MistralQ2ExamResponse';
import KimiExamResponse from './pages/KimiExamResponse';
import CopilotExamResponse from './pages/CopilotExamResponse';
import CopilotQ2ExamResponse from './pages/CopilotQ2ExamResponse';
import MetaAIExamResponse from './pages/MetaAIExamResponse';
import MetaAIQ2ExamResponse from './pages/MetaAIQ2ExamResponse';
import KimiQ2ExamResponse from './pages/KimiQ2ExamResponse';
import ErrorBoundary from './components/common/ErrorBoundary';
import UserProfilePage from './pages/UserProfilePage';
import Chatbot from './components/common/Chatbot';
import ScrollToTop from './components/common/ScrollToTop';
import KaziraAutomatePage from './pages/KaziraAutomatePage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// ProtectedRoute ensures only authenticated users can access certain paths.
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
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/kenya-ai-exam" element={<KenyaFinalAIExam />} />
              <Route path="/ai-model-results" element={<AIModelResults />} />
              <Route path="/claude-exam-response" element={<ClaudeExamResponse />} />
              <Route path="/claude-q2-exam-response" element={<ClaudeQ2ExamResponse />} />
              <Route path="/qwen-exam-response" element={<QwenExamResponse />} />
              <Route path="/qwen-q2-exam-response" element={<QwenQ2ExamResponse />} />
              <Route path="/chatgpt-exam-response" element={<ChatGPTExamResponse />} />
              <Route path="/chatgpt-q2-exam-response" element={<ChatGPTQ2ExamResponse />} />
              <Route path="/deepseek-exam-response" element={<DeepSeekExamResponse />} />
              <Route path="/deepseek-q2-exam-response" element={<DeepSeekQ2ExamResponse />} />
              <Route path="/perplexity-exam-response" element={<PerplexityExamResponse />} />
              <Route path="/perplexity-q2-exam-response" element={<PerplexityQ2ExamResponse />} />
              <Route path="/gemini-exam-response" element={<GeminiExamResponse />} />
              <Route path="/gemini-q2-exam-response" element={<GeminiQ2ExamResponse />} />
              <Route path="/grok-exam-response" element={<GrokExamResponse />} />
              <Route path="/grok-q2-exam-response" element={<GrokQ2ExamResponse />} />
              <Route path="/mistral-exam-response" element={<MistralExamResponse />} />
              <Route path="/mistral-q2-exam-response" element={<MistralQ2ExamResponse />} />
              <Route path="/kimi-exam-response" element={<KimiExamResponse />} />
              <Route path="/kimi-q2-exam-response" element={<KimiQ2ExamResponse />} />
              <Route path="/copilot-exam-response" element={<CopilotExamResponse />} />
              <Route path="/copilot-q2-exam-response" element={<CopilotQ2ExamResponse />} />
              <Route path="/meta-ai-exam-response" element={<MetaAIExamResponse />} />
              <Route path="/meta-ai-q2-exam-response" element={<MetaAIQ2ExamResponse />} />
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
                element={<KaziraAutomatePage />} 
              />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
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
