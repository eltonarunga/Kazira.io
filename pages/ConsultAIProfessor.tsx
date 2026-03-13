
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { GraduationCap, Send, Loader2, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { GEMINI_MODEL_PRO } from '../constants';
import Button from '../components/common/Button';
import { getFriendlyErrorMessage } from '../services/errorService';

const ProfessorAvatar = () => (
    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 mr-4 border-2 border-gray-200 shadow-sm">
        <GraduationCap className="w-7 h-7 text-white" />
    </div>
);

const ConsultAIProfessor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasApiKey = !!process.env.API_KEY;
  // Use any to avoid resolution issues with the internal Chat type from @google/genai
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current && hasApiKey) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: GEMINI_MODEL_PRO,
        config: {
            systemInstruction: `You are 'The Professor', the lead examiner for 'Kenya's Final AI Exam'. 
            You are a polymath with expertise in:
            1. Kenyan Context: Utu, Harambee, Jua Kali economics, Silicon Savannah trends.
            2. Mathematics & Physics: Nonlinear dynamics, Graph theory, Thermodynamics.
            3. Philosophy & Theology: Continental philosophy, African cosmology, Abrahamic theology.
            
            Your tone is scholarly, demanding, yet deeply fair and encouraging. You never provide simple answers.
            Instead, you challenge students to reconcile technical feasibility with cultural legitimacy and spiritual depth.
            
            When a student asks about a specific question from the exam (1-8), address it with multi-dimensional rigor.
            If they provide a partial answer, critique it strictly but point them toward the 'wisdom' they are missing.
            
            Always keep the Kenyan reality at the core of your arguments. Reference Nairobi, the Rift Valley, and rural contexts frequently.`,
        }
      });
      setMessages([{ 
        role: 'model', 
        text: "Welcome to my office hours. I am the lead examiner for Kenya's Final AI Exam. This is a space for rigorous inquiry—where we bridge the gap between silicon logic and ancestral wisdom. Which dimension of the exam shall we scrutinize today?" 
      }]);
    }
  }, [hasApiKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
        const response = await chatRef.current.sendMessage({ message: input });
        const modelText = response.text || "I am reflecting on that...";
        setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (err) {
        console.error("Professor chat error:", err);
        const friendlyError = getFriendlyErrorMessage(err);
        setError(friendlyError);
    } finally {
        setIsLoading(false);
    }
  };

  const suggestedTopics = [
    "Prove the redistribution mechanism for Q1",
    "Explain thermodynamic limits in Q2",
    "How does ancestral knowledge conflict with AI in Q3?",
    "What is 'Sovereignty beyond code'?",
    "Critique my answer for Q8"
  ];

  if (!hasApiKey) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Office Hours Restricted</h1>
        <p className="text-gray-600">The Professor is only available when a valid API key is present.</p>
        <Link to="/kenya-ai-exam" className="mt-8 inline-block text-black font-bold underline">Return to Exam</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f7f4] min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-5xl flex-grow flex flex-col">
        {/* Academic Header */}
        <header className="mb-8 border-b-2 border-black pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-black font-serif text-black uppercase tracking-tighter">Office Hours</h1>
            <p className="text-sm font-mono text-gray-500 mt-1 uppercase">Course: PHI-MAT-KEN 401 | Lead Examiner: The AI Professor</p>
          </div>
          <Link to="/kenya-ai-exam">
            <Button variant="outline" size="sm" className="border-black text-black">Exit Consultation</Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-grow overflow-hidden">
          {/* Sidebar / Reading List */}
          <aside className="hidden lg:block col-span-1 space-y-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Required Reflection</h2>
              <ul className="space-y-3">
                {suggestedTopics.map((topic, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => setInput(topic)}
                      className="text-sm text-left text-gray-700 hover:text-black hover:underline transition-all"
                    >
                      • {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black text-white p-5 rounded-lg">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Status</h3>
              <p className="text-sm font-serif italic">"Truth is not a data point; it is a relationship."</p>
            </div>
          </aside>

          {/* Main Chat Area */}
          <main className="col-span-1 lg:col-span-3 flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-[70vh] lg:h-auto">
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
              {messages.map((msg, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'model' && <ProfessorAvatar />}
                  <div className={`max-w-[85%] p-5 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-gray-100 text-gray-900 rounded-tr-none border border-gray-200' 
                      : 'bg-white text-gray-800 rounded-tl-none border-l-4 border-black font-serif text-lg leading-relaxed shadow-sm'
                  }`}>
                    {msg.text.split('\n\n').map((paragraph, i) => (
                      <p key={i} className={i > 0 ? 'mt-4' : ''}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-center">
                  <ProfessorAvatar />
                  <div className="bg-white border-l-4 border-black p-5 flex space-x-2">
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm border border-red-100 flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>System Disruption:</strong> {error}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <footer className="p-6 border-t border-gray-100 bg-gray-50/50">
              <form onSubmit={handleSendMessage} className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Professor a multidimensional question..."
                  className="flex-grow px-6 py-4 bg-white border border-gray-300 rounded-xl shadow-inner focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={isLoading || !input.trim()}
                  className="px-8 !rounded-xl flex items-center"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Discuss</>}
                </Button>
              </form>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ConsultAIProfessor;
