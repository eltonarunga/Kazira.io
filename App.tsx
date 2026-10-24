import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
import MetaAIQ3ExamResponse from './pages/MetaAIQ3ExamResponse';
import GrokQ3ExamResponse from './pages/GrokQ3ExamResponse';
import ClaudeSonnet5Q3ExamResponse from './pages/ClaudeSonnet5Q3ExamResponse';
import ChatGPTGPT5Q3ExamResponse from './pages/ChatGPTGPT5Q3ExamResponse';
import GeminiQ3ExamResponse from './pages/GeminiQ3ExamResponse';
import PerplexityQ3ExamResponse from './pages/PerplexityQ3ExamResponse';
import CopilotQ3ExamResponse from './pages/CopilotQ3ExamResponse';
import DeepSeekQ3ExamResponse from './pages/DeepSeekQ3ExamResponse';
import MistralQ3ExamResponse from './pages/MistralQ3ExamResponse';
import QwenQ3ExamResponse from './pages/QwenQ3ExamResponse';
import KimiQ2ExamResponse from './pages/KimiQ2ExamResponse';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import KaziraAutomatePage from './pages/KaziraAutomatePage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              {/* Core Landing & Product Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/automate" element={<KaziraAutomatePage />} />

              {/* Benchmark Hub & Leaderboard */}
              <Route path="/kenya-ai-exam" element={<KenyaFinalAIExam />} />
              <Route path="/ai-model-results" element={<AIModelResults />} />

              {/* Q1 Benchmark Transcripts */}
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

              {/* Q2 Benchmark Transcripts */}
              <Route path="/claude-q2-exam-response" element={<ClaudeQ2ExamResponse />} />
              <Route path="/qwen-q2-exam-response" element={<QwenQ2ExamResponse />} />
              <Route path="/chatgpt-q2-exam-response" element={<ChatGPTQ2ExamResponse />} />
              <Route path="/deepseek-q2-exam-response" element={<DeepSeekQ2ExamResponse />} />
              <Route path="/perplexity-q2-exam-response" element={<PerplexityQ2ExamResponse />} />
              <Route path="/gemini-q2-exam-response" element={<GeminiQ2ExamResponse />} />
              <Route path="/grok-q2-exam-response" element={<GrokQ2ExamResponse />} />
              <Route path="/mistral-q2-exam-response" element={<MistralQ2ExamResponse />} />
              <Route path="/kimi-q2-exam-response" element={<KimiQ2ExamResponse />} />
              <Route path="/copilot-q2-exam-response" element={<CopilotQ2ExamResponse />} />
              <Route path="/meta-ai-q2-exam-response" element={<MetaAIQ2ExamResponse />} />

              {/* Q3 Benchmark Transcripts */}
              <Route path="/claude-sonnet-5-q3-exam-response" element={<ClaudeSonnet5Q3ExamResponse />} />
              <Route path="/chatgpt-gpt5-q3-exam-response" element={<ChatGPTGPT5Q3ExamResponse />} />
              <Route path="/perplexity-q3-exam-response" element={<PerplexityQ3ExamResponse />} />
              <Route path="/qwen-3-8-max-q3-exam-response" element={<QwenQ3ExamResponse />} />
              <Route path="/qwen-q3-exam-response" element={<QwenQ3ExamResponse />} />
              <Route path="/mistral-medium-3-5-q3-exam-response" element={<MistralQ3ExamResponse />} />
              <Route path="/mistral-q3-exam-response" element={<MistralQ3ExamResponse />} />
              <Route path="/gemini-q3-exam-response" element={<GeminiQ3ExamResponse />} />
              <Route path="/copilot-q3-exam-response" element={<CopilotQ3ExamResponse />} />
              <Route path="/meta-ai-q3-exam-response" element={<MetaAIQ3ExamResponse />} />
              <Route path="/grok-q3-exam-response" element={<GrokQ3ExamResponse />} />
              <Route path="/deepseek-v4-1-flash-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />
              <Route path="/deepseek-q3-exam-response" element={<DeepSeekQ3ExamResponse />} />

              {/* Legal & Compliance */}
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
