
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../../types';
import { GEMINI_MODEL_FLASH_LITE } from '../../constants';
import Button from './Button';
import { getFriendlyErrorMessage } from '../../services/errorService';

const BotAvatar = () => (
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-3">
        <Bot className="h-5 w-5 text-black" strokeWidth={1.5} />
    </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasApiKey = !!process.env.API_KEY;
  // Use any to avoid build issues with internal Chat type
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current && hasApiKey) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: GEMINI_MODEL_FLASH_LITE,
        config: {
            systemInstruction: "You are KaziraBot, a friendly and helpful AI assistant for the Kazira.io platform. You must ONLY answer questions related to Kazira.io, NanostrategyKE, JinoX AI, DentSide Remote, KaziX, Kazira Learn, Kazira Automate, Job Disruption Scanner, and Kenya's Final AI Exam. If a user asks about anything outside of this scope, politely decline and state that you can only assist with Kazira-related inquiries. Keep your answers concise and helpful.",
        }
      });
      setMessages([{ role: 'model', text: 'Hello! How can I help you today?' }]);
    }
  }, [isOpen, hasApiKey]);

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
        const stream = await chatRef.current.sendMessageStream({ message: input });
        
        let modelResponse = '';
        setMessages(prev => [...prev, { role: 'model', text: '...' }]);

        for await (const chunk of stream) {
            const c = chunk as GenerateContentResponse;
            modelResponse += c.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = modelResponse;
                return newMessages;
            });
        }
    } catch (err) {
        console.error("Chat error:", err);
        const friendlyError = getFriendlyErrorMessage(err);
        setError(friendlyError);
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'model' && lastMessage.text === '...') {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = `Oops! ${friendlyError}`;
                return newMessages;
            }
            return [...prev, { role: 'model', text: `Oops! ${friendlyError}` }];
        });
    } finally {
        setIsLoading(false);
    }
  };

  if (!hasApiKey) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Toggle Chatbot"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={2} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          >
            <header className="bg-white text-black p-4 flex justify-between items-center flex-shrink-0">
              <h3 className="font-bold text-lg">KaziraBot Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black" aria-label="Close chat">
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   {msg.role === 'model' && <BotAvatar />}
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-white text-black rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
               {isLoading && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start items-end">
                    <BotAvatar />
                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                        <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
              )}
              {error && <p className="text-xs text-gray-500 text-center">{error}</p>}
              <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  disabled={isLoading}
                />
                <Button variant="primary" type="submit" disabled={isLoading || !input.trim()} className="rounded-full !px-4">
                    <Send className="h-5 w-5" strokeWidth={2} />
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
